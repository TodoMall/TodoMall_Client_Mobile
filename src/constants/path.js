export const PATH = {
  MAIN: "/",
  ONBOARDING: "/onboarding",
  SETTING: "/setting",
  SERVICE: "/setting/service",
  PERSONAL: "/setting/personal",
  NOTICE: "/setting/notice",
  REFUND: "/setting/refund",
  TERMS: "/setting/terms",
  ACCOUNT: "/setting/account",
  SINGIN: "/signin",
  AGREEMENT: "/agreement",
  MYCOURSE: "/mycourse",
  MYPAGE: "/mypage",
  ALARM: (memberId) => `/alarm?memberId=${memberId}`,
  PRO_CENTER: "/pro", // FIXME : should be change
  CS_CENTER: "https://pf.kakao.com/_xhSxjExj/chat",
};
