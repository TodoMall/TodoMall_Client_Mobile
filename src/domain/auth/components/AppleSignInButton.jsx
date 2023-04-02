import { APPLE_CLIENT_ID, APPLE_SCOPE, REDIRECT_URI } from "../../../constants";
import { BasicButton } from "../../../mds/button";
import { AppleLoginImage, AppleLoginPopupImage } from "../../../mds/image";

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
            width={isPopup ? "248px" : "100%"}
            margin="0"
            onClick={onClickLoginButton}
        >
            {isPopup ? <AppleLoginPopupImage /> : <AppleLoginImage />}
        </BasicButton>
    );
};

export default AppleSignInButton;
