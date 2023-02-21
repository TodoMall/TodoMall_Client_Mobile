import styled from "styled-components";

import { useLogin } from "../hooks";
import { PROVIDERS } from "../../../constants/providers";
import { BasicButton } from "../../../mds/button";
import { COLOR, FONT_STYLE } from "../../../constants";

const AppleLoginButton = () => {
  const { signIn, data, loading, error } = useLogin(PROVIDERS.APPLE);

  const onClickLoginButton = () => {
    signIn();
  }

  return (
      <BasicButton margin="0" width="22.375rem" backgroundColor={COLOR.WHITE} fontColor="#222222" onClick={onClickLoginButton}>
        <ButtonText>
          Apple로 계속하기
        </ButtonText>
      </BasicButton>
  )
}

export default AppleLoginButton;

const ButtonText = styled.p`
  font-size: ${FONT_STYLE.PRETENDARD_225.SIZE};
  font-weight: ${FONT_STYLE.PRETENDARD_225.WEIGTHT};
  line-height: ${FONT_STYLE.PRETENDARD_225.HEIGHT};
`