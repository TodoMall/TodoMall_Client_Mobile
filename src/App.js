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
    LoginPage,
    NoticeDetailPage,
    NoticePage,
    OnboardingPage,
    SettingPage,
    SettingPersonalPage,
    TermOfServicePage,
    TermsPage,
} from "./pages";
import { getMaxWidth } from "./utils/width";

function App() {
    const location = useLocation();

    const getBackgroundColor = () => {
        if (
            location.pathname.includes("onboarding") ||
            location.pathname.includes("signin")
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
                <Route path={PATH.ONBOARDING} element={<OnboardingPage />} />
                <Route path={PATH.SINGIN} element={<LoginPage />} />
                <Route path={PATH.AGREEMENT} element={<AgreementPage />} />
                {/* TODO : 모바일과 웹의 setting 페이지가 달라야한다 */}
                {/* 아래 페이지들은 mobile 을 기준으로 작업하였습니다. */}
                <Route path={PATH.SETTING} element={<SettingPage />} />
                <Route path={PATH.TERMS} element={<TermsPage />} />
                <Route path={PATH.ACCOUNT} element={<AccountPage />} />
                <Route path={PATH.NOTIFICATION()} element={<AccountPage />} />
                <Route path={PATH.NOTICE} element={<NoticePage />} />
                <Route
                    path={PATH.NOTICE_DETAIL()}
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
