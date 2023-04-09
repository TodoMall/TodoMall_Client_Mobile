import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useMutation, useQuery } from "@apollo/client";

import { getTodoDetailByMemberId } from "../apollo/domain/member";
import {
    updateSubscribeSessionState,
    updateSubscribeTodoState,
} from "../apollo/domain/mycourse";
import { COLOR, LOCAL_STORAGE_KEYS, PATH, S3_ENDPOINT } from "../constants";
import { uploadCertificationImage } from "../domain/member/hooks";
import { useLocalStorage } from "../hooks";
import { BasicButton } from "../mds/button";
import { PlusIcon } from "../mds/icon";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyL, BodyM, BodyXL, BodyXXL } from "../mds/text";

const MissionCertificationPage = () => {
    const [userId] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_ID);
    const navigate = useNavigate();
    const fileInputRef = useRef();

    const [readyToUpload, setReadyToUpload] = useState(false);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);

    const [productId, setProductId] = useState();
    const [sessionId, setSessionId] = useState();

    const {
        courseId: subCourseId,
        sessionId: subSessionId,
        todoId: subTodoId,
    } = useParams();

    useQuery(getTodoDetailByMemberId, {
        variables: {
            id: userId,
        },
        onCompleted: data => {
            const currentProduct = data.getMemberById.subscribeProducts.find(
                subscribeProduct => subscribeProduct.id === subCourseId
            );
            const currentSession = currentProduct.sessions.find(
                session => session.id === subSessionId
            );
            const findInSession = currentProduct.product.sessions.find(
                session => session.title === currentSession.title
            );

            setProductId(currentProduct.product.id);
            setSessionId(findInSession.id);
        },
        onError: error => console.error(error),
    });

    const [updateTodoStatus] = useMutation(updateSubscribeTodoState, {
        variables: {
            memberId: userId,
            subscribeProductId: subCourseId,
            subscribeSessionId: subSessionId,
            subscribeTodoId: subTodoId,
        },
    });
    const [updateSessionStatus] = useMutation(updateSubscribeSessionState, {
        variables: {
            memberId: userId,
            subscribeProductId: subCourseId,
            subscribeSessionId: subSessionId,
            missionImage: `${S3_ENDPOINT}/assignment/${subCourseId}/${subSessionId}/${userId}.png`,
        },
    });

    const handleSelectImageFile = () => fileInputRef.current.click();

    const handleFileSelected = ({ target: { files } }) => {
        const [selectedFile] = files;
        setFile(selectedFile);

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
            setImage(reader.result);
        };
        setReadyToUpload(true);
    };
    const handleCertificationMission = async () => {
        uploadCertificationImage(image, productId, sessionId, userId);
        await updateTodoStatus();
        await updateSessionStatus();
        navigate(PATH.MISSION_CERTIFICATION_COMPLETE);
    };

    return (
        <>
            <BasicHeader pageDescription={"미션 인증"} />
            <Container>
                <TextContainer>
                    <BodyXXL>
                        완성한 랜딩 페이지를 도메인이 나오도록 캡쳐해서 업로드
                        해주세요.
                    </BodyXXL>
                </TextContainer>
                <MissionCertificationBox readyToUpload={readyToUpload}>
                    {file && (
                        <SelectedImageViewer src={image} alt="Selected image" />
                    )}
                    {!file && (
                        <UploadButtonBox onClick={handleSelectImageFile}>
                            <PlusIcon />
                            <BodyL fontColor={COLOR.GRAY500}>업로드하기</BodyL>
                        </UploadButtonBox>
                    )}
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileSelected}
                    />
                </MissionCertificationBox>
                <BodyM fontColor={COLOR.GRAY500}>
                    이미 촬영된 사진만 업로드할 수 있습니다.
                </BodyM>
                <BasicButton
                    margin={"2rem 0 0 0"}
                    backgroundColor={
                        readyToUpload ? COLOR.SUCCESS500 : COLOR.GRAY200
                    }
                    onClick={handleCertificationMission}
                >
                    <BodyXL fontColor={COLOR.WHITE}>인증 제출하기</BodyXL>
                </BasicButton>
            </Container>
        </>
    );
};

export default MissionCertificationPage;

const Container = styled.div`
    padding: 0 1rem;
`;
const TextContainer = styled.div`
    margin: 0.75rem 0 1.5rem;
    padding: 0 0.5rem;
`;

const MissionCertificationBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22.375rem;
    height: 31.125rem;
    margin-bottom: 1.5rem;
    padding: 0.75rem;
    border-radius: 1.5rem;
    outline: ${props =>
        props.readyToUpload ? "none" : `1px dashed ${COLOR.GRAY500}`};
    outline-offset: -10px;
    background-color: ${props =>
        props.readyToUpload ? COLOR.WHITE : COLOR.GRAY50};
`;

const UploadButtonBox = styled.button`
    all: unset;
    width: 5.375rem;
    height: 4.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`;

const SelectedImageViewer = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
