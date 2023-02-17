import { COLOR, FONT_STYLE, FONT_WEIGTHT, PATH } from "../../../../constants";
import { NotificationButton } from "../../../button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyCourseHeader = () => {
  const navigate = useNavigate();
  const { memberId } = { ...localStorage }; // FIXME :  will be replaced by using hooks.

  const handleNotificationPage = () => navigate(PATH.NOTIFICATION(memberId));

  return (
    <Container>
      <TitleText>학습</TitleText>
      <NotificationButton onClick={handleNotificationPage} />
    </Container>
  );
};

export default MyCourseHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
`;

const TitleText = styled.p`
  font-weight: ${FONT_WEIGTHT.PRETENDARD_BOLD};
  font-size: ${FONT_STYLE.PRETENDARD_500.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_600.HEIGTH};
  text-align: center;
  letter-spacing: 0.02em;
  color: ${COLOR.GRAY900};
`;
