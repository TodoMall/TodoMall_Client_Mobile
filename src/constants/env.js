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
