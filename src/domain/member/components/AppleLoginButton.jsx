import styled from "styled-components";

import { BasicButton } from "../../../mds/button";
import {
  APPLE_CLIENT_ID,
  APPLE_SCOPE,
  COLOR,
  FONT_STYLE, REDIRECT_URI
} from "../../../constants";

const AppleLoginButton = () => {
  const initApple = () => {
    window.AppleID.auth.init({
      clientId: APPLE_CLIENT_ID,
      scope: APPLE_SCOPE,
      redirectURI: REDIRECT_URI,
      state: "origin:web",
      usePopup: true
    })
  }
  const signInApple = async () => {
    const response = await window.AppleID.auth.signIn();
    // TODO: response에 있는 id_token, email, name을 서버로 보낸다.
  }

  const onClickLoginButton = () => {
    initApple();
    signInApple();
  }

  return (
      <>
      <BasicButton margin="0" width="22.375rem" backgroundColor={COLOR.WHITE} fontColor="#222222" onClick={onClickLoginButton}>
        <ButtonText>
          Apple로 계속하기
        </ButtonText>
      </BasicButton>
      </>
  )
}

export default AppleLoginButton;

const ButtonText = styled.p`
  font-size: ${FONT_STYLE.PRETENDARD_225.SIZE};
  font-weight: ${FONT_STYLE.PRETENDARD_225.WEIGTHT};
  line-height: ${FONT_STYLE.PRETENDARD_225.HEIGHT};
`