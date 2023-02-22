import { useNavigate } from "react-router-dom";
import { COLOR, PATH } from "../../../../constants";
import Divider from "../../../Divider";
import { HeadingXL } from "../../../text";
import { NotificationButton } from "../../../button";
import styled from "styled-components";

const MyCourseHeader = () => {
  const navigate = useNavigate();
  const { memberId } = { ...localStorage }; // FIXME :  will be replaced by using hooks.

  const handleNotificationPage = () => navigate(PATH.NOTIFICATION(memberId));

  return (
    <>
      <Container>
        <HeadingXL fontColor={COLOR.GRAY900}>학습</HeadingXL>
        <NotificationButton onClick={handleNotificationPage} />
      </Container>
      <Divider />
    </>
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
