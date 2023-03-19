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

export const IamportMIDByRunningEnv = IAMPORT_MID_PROD;

export const KAKAO = {
    CLIENT_ID: process.env.REACT_APP_KAKAO_CLIENT_ID,
    CLIENT_SECRET: process.env.REACT_APP_KAKAO_CLIENT_SECRET,
    LOGIN_REDIRECT_URI: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    LOGOUT_REDIRECT_URI: process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI,
    ADMIN_KEY: process.env.REACT_APP_KAKAO_ADMIN_KEY,
};

export const AWS_KEYS = {
    AWS_ACCESS_KEY_ID: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
};
