import styled from "styled-components";
import KakaoLoginButton from "../domain/member/components/KakaoLoginButton";
import AppleLoginButton from "../domain/member/components/AppleLoginButton";
import GuestLoginButton from "../domain/member/components/GuestLoginButton";

const LoginPage = () => {
  return (
      <Container>
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