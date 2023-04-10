import { IamportMIDByRunningEnv } from "./env";

export const IamportPaymentGateInfo = [
    {
        id: 1,
        name: "card",
        pg: `uplus.${IamportMIDByRunningEnv.tossPayment}`,
        MID: IamportMIDByRunningEnv.tossPayment,
        customer_uid: IamportMIDByRunningEnv.customer_uid,
        pay_method: "card",
        description: "카드결제",
    },
    {
        id: 2,
        name: "trans",
        pg: `uplus.${IamportMIDByRunningEnv.tossPayment}`,
        MID: IamportMIDByRunningEnv.tossPayment,
        customer_uid: IamportMIDByRunningEnv.customer_uid,
        pay_method: "trans",
        description: "실시간 계좌이체",
    },
    {
        id: 3,
        name: "tosspay",
        pg: `tosspay.${IamportMIDByRunningEnv.tossPay}`,
        MID: IamportMIDByRunningEnv.tossPay,
        customer_uid: IamportMIDByRunningEnv.customer_uid,
        pay_method: "card",
        description: "토스페이",
    },

    {
        id: 4,
        name: "kakaopay",
        pg: `kakaopay.${IamportMIDByRunningEnv.kakaoPay}`,
        MID: IamportMIDByRunningEnv.kakaoPay,
        customer_uid: IamportMIDByRunningEnv.customer_uid,
        pay_method: "card",
        description: "카카오페이",
    },
];
