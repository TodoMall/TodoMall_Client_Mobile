export const isProd = process.env.REACT_APP_NODE_ENV === "production";
export const baseApiUrl = process.env.REACT_APP_TODO_MALL_API_ENDPOINT;
export const API_ENDPOINT = isProd
  ? process.env.REACT_APP_PROD_API_ENDPOINT
  : process.env.REACT_APP_DEV_API_ENDPOINT;
