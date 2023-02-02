import React from "react";
import styled from "styled-components";

import { ThinText, BorderText } from "../../global";
import { useNavigate } from "react-router-dom";
const MyTodoItem = ({ status, id, title, icon, productId }) => {
  const navigate = useNavigate();
  const handleDetailTodo = () => {
    navigate(`/mypage/detail/${productId}`);
  };
  let iconImage;
  switch (true) {
    case status === "success":
      iconImage = "/images/class_success_icon.svg";
      break;
    case status === "inprogress":
      iconImage = "/images/class_inprogress_icon.svg";
      break;
    // 삭제 예정
    case status === "fail":
      iconImage = "/images/mypage_plan_failed.svg";
      break;
    /*        
      TODO : 1회 실패
      case ...judge value:
        iconImage = "class_one_fail_icon";
        break;
      TODO : 2회 실패
      case ...judge value:
        iconImage = "class_two_fail_icon";
        break;
    */
    default:
  }
  return (
    <div onClick={handleDetailTodo}>
      <Container>
        <TodoInfo>
          <IconWrapper>
            <Icon src={icon} alt="" />
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

        <DDayIcon src={iconImage} alt="" />
      </Container>
    </div>
  );
};

const DDayIcon = styled.img`
  width: "59px";
  height: "32px";
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 74px;
  padding: 0 16px 0 20px;
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

export default MyTodoItem;
