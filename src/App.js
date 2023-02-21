import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LandingPage, OnboardingPage } from "./pages";
import { getMaxWidth } from "./utils/width";
import { COLOR, PATH } from "./constants";
import {
  NoticePage,
  NoticeDetailPage,
  SettingPage,
  AccountPage,
  TermsPage,
} from "./pages";
import styled from "styled-components";

function App() {
  // TODO : delete demo var
  const memberId = "";

  const location = useLocation();

  const getBackgroundColor = () => {
    if (location.pathname.includes("onboarding")) {
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
        {/* TODO : 모바일과 웹의 setting 페이지가 달라야한다 */}
        <Route path={PATH.SETTING} element={<SettingPage />} />
        <Route path={PATH.TERMS} element={<TermsPage />} />
        <Route path={PATH.ACCOUNT} element={<AccountPage />} />
        <Route path={PATH.NOTIFICATION(memberId)} element={<AccountPage />} />
        <Route path={PATH.NOTICE} element={<NoticePage />} />
        <Route
          path="/setting/notice/detail/noticeId=:noticeId"
          element={<NoticeDetailPage />}
        />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  max-width: ${(props) => props.maxWidth};
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export default App;
