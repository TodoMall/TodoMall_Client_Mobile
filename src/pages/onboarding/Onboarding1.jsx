import { Onboarding1Image } from "../../mds/image";
import styled from "styled-components";
import {COLOR, FONT_STYLE, FONT_WEIGTHT} from "../../constants";
import BasicButton from "../../mds/button/BasicButton";

const Onboarding1 = () => {

  return (
      <Body>
        <ImageContainer>
          <Onboarding1Image />
        </ImageContainer>
        <TitleText>
          빠르게 변화하는 세상
        </TitleText>
        <TitleText>
          믿은직한 전문가와
        </TitleText>
        <TitleText>
          학습하세요.
      </TitleText>
        <BasicButton width="4.75rem" backgroundColor={COLOR.WHITE} fontColor={COLOR.BRAND_COLOR}>
          다음
        </BasicButton>
      </Body>
  )
}

export default Onboarding1

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLOR.BRAND_COLOR};
  animation: 0.5s ease-in-out 0s normal forwards 1 fadeIn;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const ImageContainer = styled.div`
  width: 351.55px;
  height: 262px;
  margin-bottom: 4.5rem;
`

const TitleText = styled.p`
  font-size: ${FONT_STYLE.PRETENDARD_500.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_500.HEIGTH};
  font-weight: ${FONT_WEIGTHT.PRETENDARD_BOLD};
  color: ${COLOR.WHITE};
`