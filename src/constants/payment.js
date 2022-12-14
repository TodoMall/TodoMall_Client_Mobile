export const PaymentGateDatas = [
  {
    id: 1,
    pg: "uplus",
    MID: "tlgdacomxpay",
    pay_method: "card",
    iconPath: "/images/payment/accountTransferIcon.svg",
    description: "카드결제",
  },
  {
    id: 2,
    pg: "uplus",
    MID: "tlgdacomxpay",
    pay_method: "trans",
    iconPath: "/images/payment/cardPayIcon.svg",
    description: "실시간 계좌이체",
  },
  {
    id: 3,
    pg: "tosspay",
    MID: "tosstest",
    pay_method: "card",
    iconPath: "/images/payment/tossPayIcon.svg",
    description: "토스페이",
  },
  {
    id: 4,
    pg: "kakaopay",
    MID: "TC0ONETIME",
    pay_method: "card",
    iconPath: "/images/payment/kakaoPayIcon.svg",
    description: "카카오페이",
  },
];

export const SUCCESS = "success";
export const FAIL = "fail";
