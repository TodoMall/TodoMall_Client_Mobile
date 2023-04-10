import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
    COLOR,
    FONT_STYLE,
    LOCAL_STORAGE_KEYS,
    PATH,
} from "../../../constants";
import SearchBar from "../../../domain/store/components/SearchBar";
import Divider from "../../Divider";
import { RowBox } from "../../box";
import { LogoButton, TextButton } from "../../button";
import { CategoryTabBar } from "../../category";

const Header = () => {
    const navigate = useNavigate();
    const [userId] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_ID);

    const handleMainPage = () => navigate(PATH.MAIN);
    const handleAlarmPage = () => navigate(PATH.NOTIFICATION(userId));
    const handleSignInPage = () => navigate(PATH.SINGIN);
    const handleProPage = () => navigate(PATH.PRO_CENTER);

    const CustomTextButton = ({ content, onClick: handleClick }) => {
        return (
            <TextButton
                fontColor={COLOR.GRAY800}
                fontSize={FONT_STYLE.PRETENDARD_100.SIZE}
                lineHeight={FONT_STYLE.PRETENDARD_100.HEIGHT}
                margin={"0 0.5rem"}
                onClick={handleClick}
            >
                {content}
            </TextButton>
        );
    };

    return (
        <>
            <Container>
                <RowBox height={"3rem"} justifyContent={"space-between"}>
                    <SearchContainer>
                        <LogoButton onClick={handleMainPage} />
                        <SearchBar />
                    </SearchContainer>
                    <TextButtonGroup>
                        <CustomTextButton
                            content={"알림"}
                            onClick={handleAlarmPage}
                        />
                        <CustomTextButton
                            content={"로그인/회원가입"}
                            onClick={handleSignInPage}
                        />
                        <CustomTextButton
                            content={"프로센터"}
                            onClick={handleProPage}
                        />
                    </TextButtonGroup>
                </RowBox>

                <RowBox height={"3rem"} justifyContent={"flex-start"}>
                    <CategoryTabBar />
                </RowBox>
            </Container>

            <Divider width={"100vw"} />
        </>
    );
};

export default Header;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    padding: 0 5rem;
`;
const SearchContainer = styled.div`
    display: flex;
`;
const TextButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: auto;
`;
