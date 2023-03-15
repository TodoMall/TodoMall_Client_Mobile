import {
    COLOR,
    KAKAO_CLIENT_ID,
    KAKAO_ENDPOINT,
    REDIRECT_URI,
} from "../../../constants";
import { PROVIDERS } from "../../../constants/providers";
import { BasicButton } from "../../../mds/button";
import { BodyL } from "../../../mds/text";
import { useLogin } from "../../member/hooks";

const KakaoSignInButton = () => {
    const { signIn, data, loading, error } = useLogin(PROVIDERS.KAKAO);

    const onClickLoginButton = async () => {
        window.location.href = `${KAKAO_ENDPOINT}?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    };

    return (
        <BasicButton
            width={"100%"}
            height={"3.5rem"}
            padding={"0 1rem"}
            margin="0"
            backgroundColor="#FEE500"
            onClick={onClickLoginButton}
        >
            <BodyL>Kakao로 계속하기</BodyL>
        </BasicButton>
    );
};

export default KakaoSignInButton;
