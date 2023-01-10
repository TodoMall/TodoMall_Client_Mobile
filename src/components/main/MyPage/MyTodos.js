import React from "react";
import styled from "styled-components";
import { ThinText, BorderText } from "../../global";

const MyTodos = ({ isCompleted, isFailed, id, title, icon }) => {
  let iconImage;
  switch (true) {
    case isCompleted:
      iconImage = "/images/mypage_plan_finished.svg";
      break;
    case isFailed:
      iconImage = "/images/mypage_plan_failed.svg";
      break;
    case !isCompleted && !isFailed:
      iconImage = "/images/mypage_plan_inprogress.svg";
      break;
    default:
  }

  return (
    <>
      <Container>
        <TodoInfo>
          <IconWrapper>
            <Icon src={icon} />
          </IconWrapper>
          <Detail>
            <ThinText width="auto" fontSize="12px" lineHeight="18px">
              {id}번째 도전
            </ThinText>
            <BorderText
              width="auto"
              fontSize="16px"
              fontWeight="500"
              lineHeight="24px"
              textAlign="left"
            >
              {title}
            </BorderText>
          </Detail>
        </TodoInfo>

        <img src={iconImage} alt="" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 74px;
  padding: 0 18px;
  background-color: #fafaff;
`;

const TodoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  background: #f3f3f3;
  border-radius: 50px;
`;

const Icon = styled.img`
  height: 32px;
  width: 32px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export default MyTodos;
