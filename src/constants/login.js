// TODO : change file name login.js to auth.js

// Kakao
export const KAKAO_ENDPOINT = "https://kauth.kakao.com/oauth/authorize";
export const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID || "";

// Apple
export const APPLE_CLIENT_ID = process.env.REACT_APP_APPLE_CLIENT_ID || "";
export const APPLE_SCOPE = "name email" || "";

// common
export const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI || "";
