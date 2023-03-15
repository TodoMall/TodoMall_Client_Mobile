export const RunningEnvType = "local" | "development" | "production";
const RUNNING_ENV = process.env.REACT_APP_NODE_ENV || "production";

const API_ENDPOINT_BY_RUNNING_ENV = {
    local: process.env.REACT_APP_LOCAL_API_ENDPOINT,
    development: process.env.REACT_APP_DEV_API_ENDPOINT,
    production: process.env.REACT_APP_PROD_API_ENDPOINT,
};

export const API_ENDPOINT = API_ENDPOINT_BY_RUNNING_ENV[RUNNING_ENV];

export const isProd = process.env.REACT_APP_NODE_ENV === "production";

export const IAMPORT_MERCHANT_CODE =
    process.env.REACT_APP_IAMPORT_MERCHANT_CODE;

const IAMPORT_MID_PROD = {
    tossPay: process.env.REACT_APP_IAMPORT_TOSS_PAYMENT_MID_PROD,
    kakaoPay: process.env.REACT_APP_IAMPORT_TOSS_PAY_MID_PROD,
    tossPayment: process.env.REACT_APP_IAMPORT_KAKAO_PAY_MID_PROD,
};

const IAMPORT_MID_DEV = {
    tossPay: process.env.REACT_APP_IAMPORT_TOSS_PAYMENT_MID_DEV,
    kakaoPay: process.env.REACT_APP_IAMPORT_TOSS_PAY_MID_DEV,
    tossPayment: process.env.REACT_APP_IAMPORT_KAKAO_PAY_MID_DEV,
};

export const IamportMIDByRunningEnv = IAMPORT_MID_PROD;
