import styled from "styled-components";
import { BookClipImage } from "../mds/image";
import {
  AppleLoginButton,
  GuestLoginButton,
  KakaoLoginButton
} from "../domain/member/components";

const LoginPage = () => {
  return (
      <Container>
        <BookClipImage />
        <KakaoLoginButton />
        <AppleLoginButton />
        <GuestLoginButton />
      </Container>
  )
}

export default LoginPage;

const Container = styled.div`
  width: 100%;
`