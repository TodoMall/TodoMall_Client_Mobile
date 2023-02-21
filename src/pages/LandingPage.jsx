import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import BrandLogo from "../mds/icon/BrandLogo";

const LandingPage = () => {
  const navigator = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigator("/onboarding")
    }, 4000)
  }, [])

  return (
      <Body>
        <Container>
        <BrandLogo />
        </Container>
      </Body>
  )
}

export default LandingPage;

const Body = styled.div`
  height: 100vh;
  width: 100%;
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