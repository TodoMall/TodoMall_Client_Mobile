export const PaymentWayData = [
  // TODO: should be renamed to ...
  {
    id: 1,
    value: "card",
    iconPath: "/images/payment/accountTransferIcon.svg",
    description: "카드결제",
  },
  {
    id: 2,
    value: "account",
    iconPath: "/images/payment/cardPayIcon.svg",
    description: "실시간 계좌이체",
  },
  {
    id: 3,
    value: "toss",
    iconPath: "/images/payment/tossPayIcon.svg",
    description: "토스페이",
  },
  {
    id: 4,
    value: "kakao",
    iconPath: "/images/payment/kakaoPayIcon.svg",
    description: "카카오페이",
  },
];

export const SUCCESS = "success";
export const FAIL = "fail";
