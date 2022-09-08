import { Modal } from "@nextui-org/react";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../global/Header";

const TodoAnswerModal = ({ visible, modalCloseHandler }) => {
  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        open={visible}
        onClose={modalCloseHandler}
        width="90%"
      >
        <AnswerModalBody>
          <AnswerModalTitle>
            <span>(3/3) 새로운 프로젝트 시작하기</span>의 모범 예시예요
          </AnswerModalTitle>
          <AnswerModalSubtitle>
            모범 예시를 확인하고 나의 성취도를 확인해보세요
          </AnswerModalSubtitle>
          <AnswerModalImage src="/images/temp_answer_image.png" />
          <AnswerModalButton>확인했어요</AnswerModalButton>
        </AnswerModalBody>
      </Modal>
    </>
  );
};

const AnswerModalBody = styled.div`
  height: 70vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AnswerModalTitle = styled.p`
  text-align: left;
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 28px;
  margin-bottom: 10px;
  span {
    color: #6b47fd;
  }
`;

const AnswerModalSubtitle = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: #929292;
  margin-bottom: 30px;
`;

const AnswerModalImage = styled.img`
  width: 90%;
  margin-bottom: 20px;
`;

const AnswerModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;
  height: 52px;
  margin: 30px 0;
  background: #6b47fd;
  border-radius: 30px;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: white;
  border: none;
`;

export default TodoAnswerModal;
