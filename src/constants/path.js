export const PATH = {
  MAIN: "/",
  SERVICE: "/service",
  PERSONAL: "/personal",
  SETTING: "/setting",
  NOTICE: "/setting/notice",
  TERMS: "/setting/terms",
  ACCOUNT: "/setting/account",
  SINGIN: "/signin",
  AGREEMENT: "/agreement",
  MYCOURSE: "/mycourse",
  MYPAGE: "/mypage",
  ALARM: (memberId) => `/alarm?memberId=${memberId}`,
  PRO_CENTER: "/pro", // FIXME : should be change
};
