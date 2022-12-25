import { React } from "react";
import styled from "@emotion/styled";
import BorderText from "../global/BorderText";
import ThinText from "../global/ThinText";

const Refund = () => {
  const termOfRefundTableUrl = "/images/TermOfRefund.png";
  return (
    <>
      <BorderText
        width="100%"
        textAlign="left"
        lineHeight="18px"
        fontWeight="700"
        fontSize="12px"
      >
        환불이 불가능한 경우
      </BorderText>
      <ThinText width="100%" fontSize="12px" lineHeight="18px">
        ① 주어진 시간 내 미션 인증을 성공하지 못해 소멸된 클래스
      </ThinText>
      <ThinText width="100%" fontSize="12px" lineHeight="18px">
        ② 아직 소멸하지 않았고, 결제일로부터 7일이 경과된 클래스
      </ThinText>
      <BorderText
        width="100%"
        textAlign="left"
        lineHeight="18px"
        fontWeight="700"
        fontSize="12px"
      >
        환불이 가능한 경우
      </BorderText>
      <ThinText width="100%" fontSize="12px" lineHeight="18px">
        ① myplanit.unicorn@gmail.com으로 환불을 요청하시면, 담당자가
        도와드립니다.
      </ThinText>
      <ThinText width="100%" fontSize="12px" lineHeight="18px">
        ② 전체 환불 : 결제가 이루어졌지만, 클래스를 성공적으로 다운로드 받지
        못한 경우
      </ThinText>
      <ThinText width="100%" fontSize="12px" lineHeight="18px">
        ③ 부분 환불 : 아직 소멸되지 않았고, 결제일로부터 7일 이내인 클래스
      </ThinText>
      <BorderText
        width="100%"
        textAlign="left"
        lineHeight="18px"
        fontWeight="700"
        fontSize="12px"
      >
        부분 환불 방식
      </BorderText>
      <ThinText width="100%" fontSize="12px" lineHeight="18px">
        ① 아직 소멸하지 않았고, 결제일로부터 7일 이내인 클래스는 부분 환불이
        가능합니다.
      </ThinText>
      <ThinText width="100%" fontSize="12px" lineHeight="18px">
        ② 결제액 부분 환불률을 적용한 금액을 환불합니다. 부분 환불률은 클래스의
        구성 세션 중에서 미시작 세션의 비율로 산정합니다.
      </ThinText>
      <ThinText width="100%" fontSize="12px" lineHeight="18px">
        ③ 결제 대금을 지급한 방법과 같은 방법으로 환급을 진행합니다.
      </ThinText>
      <ThinText width="100%" fontSize="12px" lineHeight="18px">
        ④ 환불 요청이 접수된 날로부터, 3 영업일 이내 진행됩니다. 단, PG사 및
        카드사의 상황에 따라 환불이 최대 7일까지 지연될 수 있습니다.
      </ThinText>
      <RefundImage src={termOfRefundTableUrl} alt="" />
    </>
  );
};

export default Refund;

const RefundImage = styled.img`
  width: 100%;
  margin-top: 8px;
  transform: translateZ(0);
  backface-visibility: hidden;
`;
