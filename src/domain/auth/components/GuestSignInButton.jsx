import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, LOCAL_STORAGE_KEYS, PATH } from "../../../constants";
import { useLocalStorage } from "../../../hooks";
import { TextButton } from "../../../mds/button";
import { NextArrowIcon } from "../../../mds/icon";

const GuestSignInButton = () => {
    const navigator = useNavigate();
    const [, setIsGuest] = useLocalStorage(LOCAL_STORAGE_KEYS.IS_GUEST);
    const onClickGuestLoginButton = () => {
        setIsGuest(true);
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
