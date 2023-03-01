import {
    APPLE_CLIENT_ID,
    APPLE_SCOPE,
    COLOR,
    REDIRECT_URI,
} from "../../../constants";
import { BasicButton } from "../../../mds/button";
import { BodyL } from "../../../mds/text";

const AppleSignInButton = () => {
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
        // TODO: response에 있는 id_token, email, name을 서버로 보낸다.
    };

    const onClickLoginButton = () => {
        initApple();
        signInApple();
    };

    return (
        <BasicButton
            margin="0"
            backgroundColor={COLOR.WHITE}
            fontColor={COLOR.GRAY900}
            onClick={onClickLoginButton}
        >
            <BodyL>Apple로 계속하기</BodyL>
        </BasicButton>
    );
};

export default AppleSignInButton;
