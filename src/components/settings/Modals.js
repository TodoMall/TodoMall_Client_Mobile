import React from "react";
import { Modal } from "@nextui-org/react";
import Button from "../global/Button";
import styled from "styled-components";

const Modals = ({
  visibleLogout,
  closeHandlerLogout,
  visibleDelete,
  closeHandlerDelete,
}) => {
  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visibleLogout}
        onClose={closeHandlerLogout}
      >
        <ModalTitle>정말 로그아웃 하실 건가요?</ModalTitle>
        <ModalDetail>
          지금 로그아웃 하면, 이후에 서비스를 이용할 때 다시 로그인 해야 해요.
        </ModalDetail>
        <ModalImage src="/images/modal_image.svg" />
        <ModalButton>
          <Button title="로그아웃" />
        </ModalButton>
      </Modal>
      <Modal
        closeButton
        aria-labelledby="modal-titl"
        open={visibleDelete}
        onClose={closeHandlerDelete}
      >
        <ModalTitle>투두몰을 탈퇴하실 건가요?</ModalTitle>
        <ModalDetail>
          지금까지 솔빈님이 이뤄낸 모든 도전 기록 내역이 사라져 복구할 수 없게
          돼요.
        </ModalDetail>
        <ModalImage src="/images/modal_image.svg" />
        <ModalButton>
          <Button color="#D10B0B" title="탈퇴" />
        </ModalButton>
      </Modal>
    </>
  );
};

const ModalTitle = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #000000;
`;

const ModalDetail = styled.p`
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  padding: 0 15vw;
  color: #888888;
`;

const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalImage = styled.img``;

export default Modals;
