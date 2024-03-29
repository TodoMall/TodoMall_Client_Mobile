import styled from "styled-components";

import { COLOR, LOCAL_STORAGE_KEYS } from "../../../constants";
import { useLocalStorage } from "../../../hooks";
import { DefaultMemberProfile } from "../../../mds/icon";

const ProfileCard = ({
    children,
    padding = "1rem 1.25rem",
    marginBottom = "1.25rem",
    backgroundColor = COLOR.GRAY50,
}) => {
    const [image] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_IMAGE);
    return (
        <Container
            padding={padding}
            backgroundColor={backgroundColor}
            marginBottom={marginBottom}
        >
            {image ? <UserImage src={image} /> : <DefaultMemberProfile />}
            {children}
        </Container>
    );
};
export default ProfileCard;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 5.25rem;
    margin-bottom: ${props => props.marginBottom};
    padding: ${props => props.padding};
    border-radius: 1.25rem;
    background-color: ${props => props.backgroundColor};
`;
const UserImage = styled.img`
    width: 3.25rem;
    height: 3.25rem;
    object-fit: contain;
    border-radius: 2.75rem;
    content: url(${props => props.src});
`;
