import styled from "styled-components";

import {BookClipImage, BrandLogoIWithTextImage} from "../mds/image";
import {
  AppleLoginButton,
  GuestLoginButton,
  KakaoLoginButton
} from "../domain/member/components";

const LoginPage = () => {
  return (
      <Container>
        <BookClipImage />
        <BrandLogoContainer>
          <BrandLogoIWithTextImage />
        </BrandLogoContainer>
        <ButtonContainer>
          <KakaoLoginButton />
          <AppleLoginButton />
          <GuestLoginButton />
        </ButtonContainer>
      </Container>
  )
}

export default LoginPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BrandLogoContainer = styled.div`
  margin-top: 6.468rem;
`

const ButtonContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 7.5rem;
  gap: 0.5rem;
  align-items: center;
`