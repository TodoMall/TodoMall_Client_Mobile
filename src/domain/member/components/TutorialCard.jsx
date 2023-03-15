import styled from "styled-components";

import { COLOR, LOCAL_STORAGE_KEYS } from "../../../constants";
import { useLocalStorage } from "../../../hooks";
import { Card } from "../../../mds";
import { RowBox } from "../../../mds/box";
import { BasicButton } from "../../../mds/button";
import { ProgressIcon } from "../../../mds/icon";
import { LoudSpeakerImage } from "../../../mds/image";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../mds/text";

const TutorialCard = ({ onDelete: handleDeleteTutorialCard = () => {} }) => {
    const [name] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_NAME, "김상혁");

    const handleDownloadTutorial = () => {
        // TODO : BE에서 클래스 다운로드 관련 처리 후 작업
    };

    return (
        <Card justifyContent="none" margin={"0"} padding={"1rem 1.25rem"}>
            <ImageWapper>
                <LoudSpeakerImage />
            </ImageWapper>
            <RowBox justifyContent={"flex-start"}>
                <ProgressIcon />
                <BodyL margin={"0 0 0 0.25rem"} fontColor={COLOR.BRAND_COLOR}>
                    튜토리얼
                </BodyL>
            </RowBox>
            <WelcomeText>
                <HeadingXL>반가워요 {name}님!</HeadingXL>
                <BodyM>지금 튜토리얼 클래스를 다운 받아보세요</BodyM>
            </WelcomeText>
            <RowBox margin={"0.75rem 0 0 0"}>
                <BasicButton
                    onClick={handleDeleteTutorialCard}
                    backgroundColor={COLOR.GRAY100}
                    margin={"0 0.25rem"}
                    padding={0}
                >
                    <BodyL fontColor={COLOR.GRAY400}>앞으로 보지 않기</BodyL>
                </BasicButton>
                <BasicButton
                    onClick={handleDownloadTutorial}
                    margin={"0 0.25rem"}
                    padding={0}
                >
                    <BodyXL fontColor={COLOR.WHITE}>바로 시작</BodyXL>
                </BasicButton>
            </RowBox>
        </Card>
    );
};

export default TutorialCard;

const WelcomeText = styled.div`
    width: 100%;
`;
const ImageWapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 1.5rem;
`;
