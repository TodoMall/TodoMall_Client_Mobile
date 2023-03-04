import styled from "styled-components";

import { COLOR } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { BodyL, BodyM } from "../../../mds/text";

const ProfileCard = ({ padding = "1rem 1.25rem" }) => {
    const {
        name = "김상혁",
        email = "tkdgur234@naver.com",
        image = "https://k.kakaocdn.net/dn/djeMjq/btrcokyYR7j/7qdcWCkb9KZdFzaoyqt091/img_640x640.jpg",
    } = { ...localStorage };
    return (
        <Container padding={padding}>
            <UserImage src={image} />
            <UserInfo>
                <RowBox justifyContent={"flex-start"}>
                    <BodyM margin={"0 1.813rem 0 0"} fontColor={COLOR.GRAY500}>
                        이름
                    </BodyM>
                    <BodyL>{name}</BodyL>
                </RowBox>
                <RowBox>
                    <BodyM margin={"0 1rem 0 0"} fontColor={COLOR.GRAY500}>
                        이메일
                    </BodyM>
                    <BodyL>{email}</BodyL>
                </RowBox>
            </UserInfo>
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
    margin-bottom: 1.25rem;
    padding: ${props => props.padding};
    border-radius: 1.25rem;
    background-color: ${COLOR.GRAY50};
`;
const UserImage = styled.img`
    width: 3.25rem;
    height: 3.25rem;
    object-fit: contain;
    border-radius: 2.75rem;
    content: url(${props => props.src});
`;

const UserInfo = styled.div`
    margin-left: 1rem;
`;
