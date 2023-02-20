import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Agreement from "./components/login/Agreement";
import Login from "./components/login/Login";
import Service from "./components/login/Service";
import Personal from "./components/login/Personal";
import TodoBox from "./components/main/TodoBox/TodoBox";
import TodoMall from "./components/main/TodoMall/TodoMall";
import MyPage from "./components/main/MyPage/MyPage";
// TODO : rename plan folder to product
import PlanPurchase from "./components/plan/PlanPurchase";
import PlanDetail from "./components/plan/PlanDetail/PlanDetail";
import PlanRetry from "./components/plan/PlanRetry";
import Settings from "./components/settings/Settings";
import NoticeList from "./components/settings/NoticeList";
import TodoDetail from "./components/todo/TodoDetail";
import TodoSubmit from "./components/todo/TodoSubmit";
import TodoSubmitSuccess from "./components/todo/TodoSubmitSuccess";
import TodoAnswer from "./components/todo/TodoAnswer";
import Social from "./components/login/Social";
import { CAREER } from "./components/main/TodoMall/Constant";

import PaymentPage from "./components/payment/PaymentPage";
import PaymentResultPage from "./components/payment/PaymentResultPage";
import MyDashboard from "./components/main/MyPage/MyDashboard";
import MyTodoDetail from "./components/main/MyPage/MyTodoDetail";

function App() {
  const [current, setCurrent] = useState(CAREER);
  return (
    <Container>
      <Routes>
        {/* Login, Terms of Service Routes */}
        <Route index path="/" element={<Login />} />
        <Route path="/social" element={<Social />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/service" element={<Service />} />
        <Route path="/personal" element={<Personal />} />

        {/* Main pages Routes */}
        <Route path="/todobox" element={<TodoBox />} />
        <Route
          path="/todomall"
          element={<TodoMall current={current} setCurrent={setCurrent} />}
        />
        <Route path="/mypage" element={<MyPage />} />

        {/* mypage Detail, pages Routes */}
        <Route path="/mypage/dashboard" element={<MyDashboard />} />
        <Route path="/mypage/detail/:productId" element={<MyTodoDetail />} />

        {/* Todo Detail, Assignment Routes */}
        <Route
          path="/todo/:todoid/:sessionid/:productid/detail/:status"
          element={<TodoDetail />}
        />
        <Route
          path="/todo/:sessionid/:planid/:todoname/:productid/submit"
          element={<TodoSubmit />}
        />
        <Route
          path="/todo/:todoid/:sessionid/:productid/:sessionname/answer"
          element={<TodoAnswer />}
        />
        <Route path="/todo/success" element={<TodoSubmitSuccess />} />

        {/* Plan Routes */}
        <Route path="/detail/:productId" element={<PlanDetail />} />
        <Route path="/purchase/:productId" element={<PlanPurchase />} />
        <Route path="/retry/:productId" element={<PlanRetry />} />

        {/* Setting Routes */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/notice" element={<NoticeList />} />

        {/* Payment Routes */}
        <Route path="/detail/purchase/:productId" element={<PaymentPage />} />
        <Route
          path="/detail/purchase/complete/:productId"
          element={<PaymentResultPage />}
        />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: auto;
  height: 90vh;
`;

export default App;
