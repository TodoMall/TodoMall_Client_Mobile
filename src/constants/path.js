export const PATH = {
    MAIN: "/",
    ONBOARDING: "/onboarding",
    AGREEMENT: "/agreement",
    AGREEMENT_PERSONAL: "/agreement/personal",
    SETTING: "/setting",
    TERMS: "/setting/terms",
    SERVICE: "/setting/terms/service",
    SETTING_PERSONAL: "/setting/terms/personal",
    REFUND: "/setting/refund",
    ACCOUNT: "/setting/account",
    NOTICE: "/setting/notice",
    NOTICE_DETAIL: "/setting/notice/detail",
    SINGIN: "/signin",
    MYPAGE: "/mypage",
    NOTIFICATION: memberId => `/notification?memberId=${memberId}`,
    PRO_CENTER: "/pro", // FIXME : should be change
    CS_CENTER: "https://pf.kakao.com/_xhSxjExj/chat",
    SEARCH: search => `store?search=${search}`,
    STORE: "/store",
    STORE_DETAIL: courseId => `/store/course/detail?courseId=${courseId}`,
    EDUCATION: "/education",
    MYCOURSE: "/mycourse",
    TODO_DETAIL: (courseId, sessionId, todoId) =>
        `/mycourse/detail/todo?courseId=${courseId}&sessionId=${sessionId}&todoId=${todoId}`,
    MISSION_CERTIFICATION: (courseId, sessionId) =>
        `/mycourse/session/mission?courseId=${courseId}&sessionId=${sessionId}`,
};
