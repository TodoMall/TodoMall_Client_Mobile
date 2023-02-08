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
    iconPath: "/images/payment/tossPayIcon.png",
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

// FIXME : should be deleted
export const paymentResultData = {
  success: {
    title: "결제완료",
    iconPath: "/images/payment/paymnetSuccessIcon.svg",
    notice: "시간 내에 완수해야 다음 세션을 계속 들을 수 있어요.",
    locationGuideText: "내 투두함으로 이동",
  },
  fail: {
    title: "결제실패",
    iconPath: "/images/payment/paymnetFailIcon.svg",
    locationGuideText: "다시 결제하기",
  },
};
