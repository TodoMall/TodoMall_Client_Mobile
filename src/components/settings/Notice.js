import styled from "styled-components";

import { useState } from "react";
import { Divider, BorderText, ThinText } from "../global";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

const Notice = ({ notice }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibleToggle = () => {
    setIsVisible((prevState) => !prevState);
  };
  const formattedDate = dayjs(notice.created_at).format(
    "YYYY. MM. DD. (ddd) hh:mm"
  );

  return (
    <>
      <Wrapper key={notice.id} onClick={handleVisibleToggle}>
        <NoticeItem>
          <TextWrapper>
            <BorderText
              width="auto"
              textAlign="left"
              fontSize="16px"
              lineHeight="24px"
            >
              {notice.title}
            </BorderText>
            <ThinText
              width="auto"
              fontSize="12px"
              lineHeight="18px"
              margin={isVisible ? "0 0 16px 0" : ""}
            >
              {formattedDate}
            </ThinText>
          </TextWrapper>
          <AccordionIcom
            src={
              isVisible
                ? "/images/showAccordion.svg"
                : "/images/unshowAccordion.svg"
            }
            alt=""
            margin={isVisible}
          />
        </NoticeItem>
        {isVisible && (
          <NoticeDescription>
            <BorderText width="auto">{notice.description}</BorderText>
          </NoticeDescription>
        )}
      </Wrapper>
      {!isVisible && <Divider width="100%" height="2px" />}
    </>
  );
};

export default Notice;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const NoticeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NoticeDescription = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #ededed;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fbfbfb;
`;
const AccordionIcom = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: ${(props) => (props.margin ? "16px" : "0")};
`;
