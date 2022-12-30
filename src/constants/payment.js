export const Success = "success";
export const Fail = "fail";

export const PaymentMethods = [
  {
    id: 1,
    name: "card",
    pg: "uplus.tlgdacomxpay",
    MID: "tlgdacomxpay",
    pay_method: "card",
    iconPath: "/images/payment/cardPayIcon.svg",
    description: "카드결제",
  },
  {
    id: 2,
    name: "trans",
    pg: "uplus.tlgdacomxpay",
    MID: "tlgdacomxpay",
    pay_method: "trans",
    iconPath: "/images/payment/accountTransferIcon.svg",
    description: "실시간 계좌이체",
  },
  {
    id: 3,
    name: "tosspay",
    pg: "tosspay.tosstest",
    MID: "tosstest",
    pay_method: "card",
    iconPath: "/images/payment/tossPayIcon.svg",
    description: "토스페이",
  },
  {
    id: 4,
    name: "kakaopay",
    pg: "kakaopay.TC0ONETIME",
    MID: "TC0ONETIME",
    pay_method: "card",
    iconPath: "/images/payment/kakaoPayIcon.svg",
    description: "카카오페이",
  },
];

// 삭제 예정이라 이름은 변경하지 않습니다
export const paymentResultData = {
  success: {
    title: "결제완료",
    iconPath: "/images/payment/paymnetSuccessIcon.svg",
    message:
      "클래스가 성공적으로 추가됐어요. 데드라인 내에 미션 인증을 잊지 마세요!",
    notice: "시간 내에 완수해야 다음 세션을 계속 들을 수 있어요.",
    buttonMessage: "내 투두함으로 이동",
    redirectPath: "/todobox",
  },
  fail: {
    title: "결제실패",
    iconPath: "/images/payment/paymnetFailIcon.svg",
    message: "결제 과정 중에 문제가 발생했습니다.",
    notice:
      "선택하신 출금 계좌가 출금이체 등록이 되어 있지 않아요.\n계좌를 다시 등록해 주세요.",
    buttonMessage: "다시 결제하기",
  },
};
