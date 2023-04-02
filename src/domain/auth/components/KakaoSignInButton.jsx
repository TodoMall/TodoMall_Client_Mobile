import {
    KAKAO_CLIENT_ID,
    KAKAO_ENDPOINT,
    REDIRECT_URI,
} from "../../../constants";
import { PROVIDERS } from "../../../constants/providers";
import { BasicButton } from "../../../mds/button";
import { KakaoLoginImage, KakaoLoginPopupImage } from "../../../mds/image";
import { useLogin } from "../../member/hooks";

const KakaoSignInButton = ({ isPopup }) => {
    const { signIn, data, loading, error } = useLogin(PROVIDERS.KAKAO);

    // TODO : 이미 회원일 때는 store 페이지로 redirect
    // TODO : 카카오로 로그인 시 isGuest = false 할당
    const onClickLoginButton = async () => {
        window.location.href = `${KAKAO_ENDPOINT}?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    };

    return (
        <BasicButton
            width={isPopup ? "248px" : "100%"}
            onClick={onClickLoginButton}
        >
            {isPopup ? <KakaoLoginPopupImage /> : <KakaoLoginImage />}
        </BasicButton>
    );
};

export default KakaoSignInButton;
