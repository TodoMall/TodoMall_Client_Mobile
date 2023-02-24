import styled from "styled-components";

import { COLOR } from "../../../constants";
import { Card } from "../../../mds";
import { RowBox } from "../../../mds/box";
import { BasicButton } from "../../../mds/button";
import { ProgressIcon } from "../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../mds/text";

const TutorialCard = () => {
    const { name } = { ...localStorage }; // FIXME :  will be replaced by using hooks.
    const handleDownloadTutorial = () => {
        // ...login
    };
    return (
        <Card justifyContent="none" margin={"0"} padding={"1rem 1.25rem"}>
            {/* TODO : delete demo img , and get img component from @/mds/image folder */}
            <img
                width={318}
                height={208}
                src="/image/demo_tutorial_card.png"
                alt="Demo Tutorial Card"
            />
            <RowBox justifyContent={"flex-start"}>
                <ProgressIcon />
                <BodyL margin={"0 0 0 0.25rem"} fontColor={COLOR.BRAND_COLOR}>
                    튜토리얼
                </BodyL>
            </RowBox>
            <WelcomeText>
                <HeadingXL>반가워요 {"솔빈님"}</HeadingXL>
                <BodyM>지금 튜토리얼 클래스를 다운 받아보세요</BodyM>
            </WelcomeText>
            <RowBox margin={"0.75rem 0 0 0"}>
                <BasicButton
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
