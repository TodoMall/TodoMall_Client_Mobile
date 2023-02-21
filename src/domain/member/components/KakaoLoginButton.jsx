import styled from "styled-components";

import { BasicButton } from "../../../mds/button";
import { useLogin } from "../hooks";
import { PROVIDERS } from "../../../constants/providers";
import {FONT_STYLE} from "../../../constants";

const KakaoLoginButton = () => {
  const { signIn, data, loading, error } = useLogin(PROVIDERS.KAKAO);

  const onClickLoginButton = () => {
    signIn();
  }

  return (
      <BasicButton margin="0" width="22.375rem" backgroundColor="#FEE500" fontColor="#222222" onClick={onClickLoginButton}>
        <ButtonText>
          Kakao로 계속하기
        </ButtonText>
      </BasicButton>
  )
}

export default KakaoLoginButton;

const ButtonText = styled.p`
  font-size: ${FONT_STYLE.PRETENDARD_225.SIZE};
  font-weight: ${FONT_STYLE.PRETENDARD_225.WEIGTHT};
  line-height: ${FONT_STYLE.PRETENDARD_225.HEIGHT};
`
