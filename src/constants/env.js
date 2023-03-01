export const isProd = process.env.REACT_APP_NODE_ENV === "production";
export const API_ENDPOINT = isProd
    ? process.env.REACT_APP_PROD_API_ENDPOINT
    : process.env.REACT_APP_DEV_API_ENDPOINT;

export const IAMPORT_MERCHANT_CODE =
    process.env.REACT_APP_IAMPORT_MERCHANT_CODE;
