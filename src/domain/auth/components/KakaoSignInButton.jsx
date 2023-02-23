import styled from "styled-components";

import {
    COLOR,
    FONT_STYLE,
    KAKAO_CLIENT_ID,
    KAKAO_ENDPOINT,
    REDIRECT_URI,
} from "../../../constants";
import { PROVIDERS } from "../../../constants/providers";
import { BasicButton } from "../../../mds/button";
import { useLogin } from "../../member/hooks";

const KakaoSignInButton = () => {
    const { signIn, data, loading, error } = useLogin(PROVIDERS.KAKAO);

    const onClickLoginButton = async () => {
        window.location.href = `${KAKAO_ENDPOINT}?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    };

    // FIXME: Tablet 화면 css까지 나왔을 때, width 설정을 변경할 예정입니다.
    return (
        <BasicButton
            margin="0"
            backgroundColor="#FEE500"
            fontColor={COLOR.GRAY900}
            onClick={onClickLoginButton}
        >
            <ButtonText>Kakao로 계속하기</ButtonText>
        </BasicButton>
    );
};

export default KakaoSignInButton;

const ButtonText = styled.p`
    font-size: ${FONT_STYLE.PRETENDARD_225.SIZE};
    font-weight: ${FONT_STYLE.PRETENDARD_225.WEIGTHT};
    line-height: ${FONT_STYLE.PRETENDARD_225.HEIGHT};
`;
