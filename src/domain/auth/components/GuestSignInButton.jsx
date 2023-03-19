import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH } from "../../../constants";
import { TextButton } from "../../../mds/button";
import NextArrowIcon from "../../../mds/icon/NextArrowIcon";

const GuestSignInButton = () => {
    const navigator = useNavigate();

    const onClickGuestLoginButton = () => {
        navigator(PATH.STORE);
    };

    return (
        <TextButton
            height="1.5rem"
            margin="1rem 0 0 0"
            onClick={onClickGuestLoginButton}
        >
            <ItemContainer>
                <GuestLoginText>게스트로 둘러보기</GuestLoginText>
                <NextArrowIcon />
            </ItemContainer>
        </TextButton>
    );
};

export default GuestSignInButton;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

const GuestLoginText = styled.p`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.313rem;
    text-align: center;
    letter-spacing: -0.01rem;
    color: ${COLOR.WHITE};
`;
