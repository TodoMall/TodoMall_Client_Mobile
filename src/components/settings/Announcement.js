import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Divider from "../global/Divider";
import Header from "../global/Header";

const Announcement = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title="공지사항" />
      <Announcements>
        <AnnouncementRow
          onClick={() => {
            navigate("1");
          }}
        >
          <AnnouncementDate>2022.07.01</AnnouncementDate>
          <AnnouncementTitle>공지사항 제목입니다</AnnouncementTitle>
        </AnnouncementRow>
        <Divider />
        <AnnouncementRow
          onClick={() => {
            navigate("1");
          }}
        >
          <AnnouncementDate>2022.07.01</AnnouncementDate>
          <AnnouncementTitle>공지사항 제목입니다</AnnouncementTitle>
        </AnnouncementRow>
        <Divider />
        <AnnouncementRow
          onClick={() => {
            navigate("1");
          }}
        >
          <AnnouncementDate>2022.07.01</AnnouncementDate>
          <AnnouncementTitle>공지사항 제목입니다</AnnouncementTitle>
        </AnnouncementRow>
        <Divider />
      </Announcements>
    </>
  );
};

const Announcements = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const AnnouncementRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 5px;
`;

const AnnouncementDate = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #979797;
`;

const AnnouncementTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;

export default Announcement;
