import React from "react";
import styled from "styled-components";
import useAxios from "axios-hooks";
import { Header } from "../global";
import { baseApiUrl } from "../../constants";
import Notice from "./Notice";

const NoticeList = () => {
  const [{ data: noticeList }] = useAxios(`${baseApiUrl}notice`);
  return (
    <>
      <Header title="공지사항" />
      <Wrapper>
        {noticeList?.map((notice) => {
          return <Notice notice={notice} />;
        })}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

export default NoticeList;
