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
    NOTICE_DETAIL: "/setting/notice/detail/:noticeId", //add : noticeId=${noticeId}
    SINGIN: "/signin",
    MYPAGE: "/mypage",
    NOTIFICATION: "/notification/:memberId", // add : ?memberId=${memberId}
    PRO_CENTER: "/pro", // FIXME : should be change
    CS_CENTER: "https://pf.kakao.com/_xhSxjExj/chat",
    PAYMENT: "/order/:courseId",
    PAYMENT_DETAIL: "/order/complete/:courseId",
    STORE: "/store",
    STORE_CATEGORY: "/store/category",
    STORE_DETAIL: "/store/course/detail/:courseId", //` add : ?courseId=${courseId}`,
    MYCOURSE: "/mycourse",
    PAID_PRODUCT_DETAIL: "/mycourse/detail",
    TODO_DETAIL: "/mycourse/detail/todo", //  :courseId=${courseId}&sessionId=${sessionId}&todoId=${todoId}
    TODO_DETAIL_BEST: "/mycourse/detail/todo/bestpractice",
    MISSION_CERTIFICATION: "/mycourse/session/", // add : mission?courseId=${courseId}&sessionId=${sessionId}
};
