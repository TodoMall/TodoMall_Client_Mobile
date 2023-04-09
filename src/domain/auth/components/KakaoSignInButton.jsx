import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
    COLOR,
    KAKAO_CLIENT_ID,
    KAKAO_ENDPOINT,
    LOCAL_STORAGE_KEYS,
    PATH,
    REDIRECT_URI,
} from "../../../constants";
import { PROVIDERS } from "../../../constants/providers";
import { useLocalStorage } from "../../../hooks";
import { BasicButton } from "../../../mds/button";
import { KakaoIcon } from "../../../mds/icon";
import { useLogin } from "../../member/hooks";

const KakaoSignInButton = () => {
    const [, setIsGest] = useLocalStorage(LOCAL_STORAGE_KEYS.IS_GUEST, false);
    const [accessToken] = useLocalStorage(
        LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
        null
    );

    const navigate = useNavigate();
    const { signIn, data, loading, error } = useLogin(PROVIDERS.KAKAO);

    const onClickLoginButton = async () => {
        setIsGest(false);
        if (accessToken) {
            return navigate(PATH.MYCOURSE);
        }
        if (!accessToken) {
            return (window.location.href = `${KAKAO_ENDPOINT}?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`);
        }
    };

    return (
        <BasicButton
            margin={0}
            backgroundColor={"#FEE500"}
            onClick={onClickLoginButton}
        >
            <KakaoIcon />
            <ButtonText>Kakao로 계속하기</ButtonText>
        </BasicButton>
    );
};

export default KakaoSignInButton;

const ButtonText = styled.div`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.01rem;
    text-align: center;
    color: ${COLOR.GRAY900};
`;
