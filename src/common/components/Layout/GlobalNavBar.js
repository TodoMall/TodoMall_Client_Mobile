import styled from "styled-components";
import { EducationIcon, MyPageIcon, StoreIcon } from "../icon";
import { useCurrentLocation } from "../../../hooks";
import { GNB, PATH } from "../../../constants";
import { useNavigate } from "react-router-dom";

const GlobalNavBar = () => {
  const navigate = useNavigate();
  const [_ignore, setCurrentLocation] = useCurrentLocation();

  const handleStore = () => {
    setCurrentLocation(GNB.STORE);
    navigate(PATH.STORE);
  };
  const handleEducation = () => {
    setCurrentLocation(GNB.EDUCATION);
    navigate(PATH.EDUCATION);
  };
  const handleMyPage = () => {
    setCurrentLocation(GNB.MYPAGE);
    navigate(PATH.MYPAGE);
  };

  return (
    <Container>
      <StoreIcon onClick={handleStore} />
      <EducationIcon onClick={handleEducation} />
      <MyPageIcon onClick={handleMyPage} />
    </Container>
  );
};

export default GlobalNavBar;

const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;
