import styled from "styled-components";

import {
    APPLE_CLIENT_ID,
    APPLE_SCOPE,
    COLOR,
    REDIRECT_URI,
} from "../../../constants";
import { BasicButton } from "../../../mds/button";
import { AppleIcon } from "../../../mds/icon";

const AppleSignInButton = ({ isPopup }) => {
    const initApple = () => {
        window.AppleID.auth.init({
            clientId: APPLE_CLIENT_ID,
            scope: APPLE_SCOPE,
            redirectURI: REDIRECT_URI,
            state: "origin:web",
            usePopup: true,
        });
    };
    const signInApple = async () => {
        const response = await window.AppleID.auth.signIn();
        // TODO : 카카오로 로그인 시 isGuest = false 할당
        // TODO: response에 있는 id_token, email, name을 서버로 보낸다.
    };

    const onClickLoginButton = () => {
        initApple();
        signInApple();
    };

    return (
        <BasicButton
            margin={0}
            backgroundColor={"#ffffff"}
            onClick={onClickLoginButton}
        >
            <AppleIcon />
            <ButtonText>Apple로 계속하기</ButtonText>
        </BasicButton>
    );
};

export default AppleSignInButton;

const ButtonText = styled.div`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.01rem;
    text-align: center;
    color: ${COLOR.GRAY900};
`;
