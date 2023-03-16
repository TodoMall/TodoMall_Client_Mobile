import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH } from "../constants";
import { BasicButton } from "../mds/button";
import { CheckMarkImage } from "../mds/image";
import ExclamationMarkImage from "../mds/image/ExclamationMarkImage";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyXL, BodyXXL, HeadingXL } from "../mds/text";

const MissionCertificationCompletePage = ({ isComplete }) => {
    const navigate = useNavigate();
    const handleToMainPage = () => navigate(PATH.STORE);

    return (
        <>
            <BasicHeader
                pageDescription={`인증 ${isComplete ? "완료" : "실패"}`}
            />
            <Container>
                <TextContainer>
                    <HeadingXL>미션 인증이 완료되었습니다</HeadingXL>
                    <BodyXXL margin={"0.5rem 0 0 0"}>
                        {isComplete
                            ? "인증 사진이 성공적으로 제출되었어요. 다음 세션을 향해떠나볼까요?"
                            : "네트워크에 문제가 발생했습니다. 다시 한 번 확인 후, 미션을 인증해주세요."}
                    </BodyXXL>
                </TextContainer>
                <ImageWrapper>
                    {isComplete ? <CheckMarkImage /> : <ExclamationMarkImage />}
                </ImageWrapper>
                <BasicButton onClick={handleToMainPage}>
                    <BodyXL fontColor={COLOR.WHITE}>메인으로 이동</BodyXL>
                </BasicButton>
            </Container>
        </>
    );
};

export default MissionCertificationCompletePage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0.75rem 1rem;
`;

const TextContainer = styled.div`
    padding: 0 0.5rem;
`;

const ImageWrapper = styled.div`
    display: flex;
    margin: 77px 0 207px;
    justify-content: center;
    align-items: center;
`;
