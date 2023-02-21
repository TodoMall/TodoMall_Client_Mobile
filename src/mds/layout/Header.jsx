import styled from "styled-components";
import { MAX_WIDTH, PATH } from "../../constants";
import { BrandLogo } from "../icon";
import { CategoryTabBar } from "../category";
import { RowBox } from "../box";
import { TextButton } from "../button";
import { useNavigate } from "react-router-dom";
import Divider from "../Divider";

const Header = () => {
  const navigate = useNavigate();
  const { memberId } = { ...localStorage }; // FIXME :  will be replaced by using hooks.

  const handleMainPage = () => navigate(PATH.MAIN);
  const handleAlarmPage = () => navigate(PATH.ALARM(memberId));
  const handleSignInPage = () => navigate(PATH.SINGIN);
  const handleProPage = () => navigate(PATH.PRO_CENTER);

  return (
    <>
      <Container>
        <RowBox height={"3rem"} justifyContent={"space-between"}>
          <BrandLogo onClick={handleMainPage} />

          {/* TODO: To be add Seaarch Bar when fix design and interactions */}

          <TextButtonGroup>
            <TextButton margin={"0 0.5rem"} onClick={handleAlarmPage}>
              알림
            </TextButton>
            <TextButton margin={"0 0.5rem"} onClick={handleSignInPage}>
              로그인/회원가입
            </TextButton>
            <TextButton margin={"0 0.5rem"} onClick={handleProPage}>
              프로센터
            </TextButton>
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
  max-width: ${MAX_WIDTH};
  width: 100vw;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
`;
const TextButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: auto;
`;