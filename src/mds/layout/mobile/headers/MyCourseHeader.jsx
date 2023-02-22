import { COLOR, FONT_STYLE, PATH } from "../../../../constants";
import { NotificationButton } from "../../../button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Divider from "../../../Divider";

const MyCourseHeader = () => {
    const navigate = useNavigate();
    const { memberId } = { ...localStorage }; // FIXME :  will be replaced by using hooks.

    const handleNotificationPage = () => navigate(PATH.NOTIFICATION(memberId));

    return (
        <>
            <Container>
                <Theme>학습</Theme>
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

const Theme = styled.p`
    font-weight: ${FONT_STYLE.PRETENDARD_450.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_450.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_450.HEIGHT};
    text-align: center;
    letter-spacing: 0.02em;
    color: ${COLOR.GRAY900};
`;
