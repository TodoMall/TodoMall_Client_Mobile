import styled from "styled-components";

import BrandLogo from "../mds/icon/BrandLogo";

const OnboardingPage = () => {
  return (
      <Body>
        <Container>
        <BrandLogo />
        </Container>
      </Body>
  )
}

export default OnboardingPage;

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  animation: 3.5s ease-in-out 0s normal forwards 1 fadeInAndOut;
  @keyframes fadeInAndOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`