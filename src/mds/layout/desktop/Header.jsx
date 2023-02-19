import styled from "styled-components";

import { COLOR, FONT_STYLE, PATH } from "../../../constants";
import { BrandLogo } from "../../icon";
import { CategoryTabBar } from "../../category";
import { RowBox } from "../../box";
import { TextButton } from "../../button";
import Divider from "../../Divider";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../domain/store/components/SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const { memberId } = { ...localStorage }; // FIXME :  will be replaced by using hooks.

  const handleMainPage = () => navigate(PATH.MAIN);
  const handleAlarmPage = () => navigate(PATH.NOTIFICATION(memberId));
  const handleSignInPage = () => navigate(PATH.SINGIN);
  const handleProPage = () => navigate(PATH.PRO_CENTER);

  const CustomTextButton = ({ content, onClick: handleClick }) => {
    return (
      <TextButton
        fontColor={COLOR.GRAY800}
        fontSize={FONT_STYLE.PRETENDARD_200.SIZE}
        lineHeight={FONT_STYLE.PRETENDARD_200.HEIGTH}
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
            <BrandLogo onClick={handleMainPage} />
            <SearchBar />
          </SearchContainer>
          <TextButtonGroup>
            <CustomTextButton content={"알림"} onClick={handleAlarmPage} />
            <CustomTextButton
              content={"로그인/회원가입"}
              onClick={handleSignInPage}
            />
            <CustomTextButton content={"프로센터"} onClick={handleProPage} />
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
