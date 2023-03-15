import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, LOCAL_STORAGE_KEYS, PATH } from "../../../constants";
import { useLocalStorage } from "../../../hooks";
import { Card } from "../../../mds";
import { RowBox } from "../../../mds/box";
import { BasicButton } from "../../../mds/button";
import { ProgressIcon } from "../../../mds/icon";
import { LoudSpeakerImage } from "../../../mds/image";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../mds/text";

const SearchClassCard = () => {
    const navigate = useNavigate();
    const [name] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_NAME, "김상혁");

    const handleStore = () => navigate(PATH.STORE);

    return (
        <Container>
            <Card justifyContent="none" margin={"0"} padding={"1rem 1.25rem"}>
                <ImageWapper>
                    <LoudSpeakerImage />
                </ImageWapper>
                <RowBox justifyContent={"flex-start"}>
                    <ProgressIcon color={COLOR.GRAY500} />
                    <BodyL margin={"0 0 0 0.25rem"} fontColor={COLOR.GRAY500}>
                        튜토리얼
                    </BodyL>
                </RowBox>
                <WelcomeText>
                    <HeadingXL>반가워요 {name}님!</HeadingXL>
                    <BodyM>지금 마이플랜잇님께 맞는 클래스를 찾아보세요!</BodyM>
                </WelcomeText>
                <RowBox justifyContent="flex-end" margin={"0.75rem 0 0 0"}>
                    <BasicButton
                        width={"50%"}
                        padding={0}
                        margin={"0 0.25rem"}
                        onClick={handleStore}
                    >
                        <BodyXL fontColor={COLOR.WHITE}>바로 탐색하기</BodyXL>
                    </BasicButton>
                </RowBox>
            </Card>
        </Container>
    );
};

export default SearchClassCard;

const Container = styled.div``;
const ImageWapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 1.5rem;
`;
const WelcomeText = styled.div`
    width: 100%;
`;
