import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { LOCAL_STORAGE_KEYS, PATH } from "../../../../constants";
import Divider from "../../../Divider";
import { NotificationButton } from "../../../button";
import { HeadingXL } from "../../../text";

const MyCourseHeader = () => {
    const navigate = useNavigate();
    const [userId] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_ID);

    const handleNotificationPage = () =>
        navigate(`${PATH.NOTIFICATION}/${userId}`);

    return (
        <>
            <Container>
                <HeadingXL>학습</HeadingXL>
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
