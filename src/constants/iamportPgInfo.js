export const IamportPaymentGateInfo = [
    {
        id: 1,
        name: "card",
        pg: "uplus.im_mariplk9qn",
        MID: "im_mariplk9qn",
        pay_method: "card",
        description: "카드결제",
    },
    {
        id: 2,
        name: "trans",
        pg: "uplus.im_mariplk9qn",
        MID: "im_mariplk9qn",
        pay_method: "trans",
        description: "실시간 계좌이체",
    },
    {
        id: 3,
        name: "tosspay",
        pg: "tosspay.IMPTtodoma01",
        MID: "IMPTtodoma01",
        pay_method: "card",
        description: "토스페이",
    },
    // TODO : 실 결제를 위한 kakao MID로 변경
    {
        id: 4,
        name: "kakaopay",
        pg: "kakaopay.TC0ONETIME",
        MID: "TC0ONETIME",
        pay_method: "card",
        description: "카카오페이",
    },
];
