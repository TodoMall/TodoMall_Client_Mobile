import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import { COLOR, PATH } from "./constants";
import {
    AccountPage,
    AgreementPage,
    AgreementPersonalPage,
    LandingPage,
    MissionCertificationCompletePage,
    MissionCertificationPage,
    MyCoursePage,
    NoticeDetailPage,
    NoticePage,
    NotificationPage,
    OnboardingPage,
    PaymentCompletePage,
    PaymentPage,
    SettingPage,
    SettingPersonalPage,
    SignInPage,
    StoreCategoryPage,
    StoreDetailPage,
    StorePage,
    TermOfServicePage,
    TermsPage,
    TodoBestPractice,
} from "./pages";
import MyPage from "./pages/MyPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import { getMaxWidth } from "./utils/width";

function App() {
    // TODO : should be deleted
    localStorage.setItem("USER_ID", "56167553-ab6f-4d8f-8c81-f402988e9be1");
    localStorage.setItem("memberId", "56167553-ab6f-4d8f-8c81-f402988e9be1");

    const location = useLocation();
    const getBackgroundColor = () => {
        if (
            location.pathname.includes(PATH.ONBOARDING) ||
            location.pathname.includes(PATH.SINGIN)
        ) {
            return COLOR.BRAND_COLOR;
        }
        return COLOR.WHITE;
    };

    useEffect(() => {
        document.body.style.backgroundColor = getBackgroundColor();
    }, [location.pathname]);

    return (
        <Container maxWidth={getMaxWidth()}>
            <Routes>
                <Route path={PATH.MAIN} element={<LandingPage />} />
                <Route path={PATH.MYCOURSE} element={<MyCoursePage />} />
                <Route path={PATH.ONBOARDING} element={<OnboardingPage />} />
                <Route path={PATH.SINGIN} element={<SignInPage />} />
                <Route path={PATH.AGREEMENT} element={<AgreementPage />} />
                <Route path={PATH.SETTING} element={<SettingPage />} />
                <Route path={PATH.TERMS} element={<TermsPage />} />
                <Route path={PATH.ACCOUNT} element={<AccountPage />} />
                <Route
                    path={`${PATH.NOTIFICATION}/:userId`}
                    element={<NotificationPage />}
                />
                <Route path={PATH.NOTICE} element={<NoticePage />} />
                <Route
                    path={`${PATH.NOTICE_DETAIL}/:noticeId`}
                    element={<NoticeDetailPage />}
                />
                <Route
                    path={PATH.AGREEMENT_PERSONAL}
                    element={<AgreementPersonalPage />}
                />
                <Route
                    path={PATH.SETTING_PERSONAL}
                    element={<SettingPersonalPage />}
                />
                <Route path={PATH.SERVICE} element={<TermOfServicePage />} />
                <Route path={PATH.STORE} element={<StorePage />} />
                <Route
                    path={`${PATH.STORE_DETAIL}/:courseId`}
                    element={<StoreDetailPage />}
                />
                <Route
                    path={PATH.STORE_CATEGORY}
                    element={<StoreCategoryPage />}
                />
                <Route
                    path={`${PATH.PAYMENT}/:courseId`}
                    element={<PaymentPage />}
                />
                <Route
                    path={`${PATH.PAYMENT_DETAIL}/:courseId`}
                    element={<PaymentCompletePage />}
                />
                <Route path={PATH.MYPAGE} element={<MyPage />} />

                <Route
                    path={`${PATH.TODO_DETAIL}/:courseId/:sessionId/:todoId`}
                    element={<TodoDetailPage />}
                />
                <Route
                    path={`${PATH.TODO_DETAIL_BEST}/:courseId/:sessionId/:todoId`}
                    element={<TodoBestPractice />}
                />

                <Route
                    path={`${PATH.MISSION_CERTIFICATION}/:courseId/:sessionId/:todoId`}
                    element={<MissionCertificationPage />}
                />

                <Route
                    path={PATH.MISSION_CERTIFICATION_COMPLETE}
                    element={<MissionCertificationCompletePage />}
                />
            </Routes>
        </Container>
    );
}
const Container = styled.div`
    max-width: ${props => props.maxWidth};
    height: 100%;
    width: 100%;
    margin: 0 auto;
`;
export default App;
