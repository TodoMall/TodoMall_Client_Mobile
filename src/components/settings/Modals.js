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
        aria-labelledby="modal-title"
        open={visibleLogout}
        onClose={closeHandlerLogout}
        width="90%"
      >
        <Container>
          <ModalImage src="/images/modal_image.svg" />
          <ModalTitle>정말 로그아웃 하실 건가요?</ModalTitle>
          <ModalDetail>
            지금 로그아웃 하면, 이후에 서비스를 이용할 때 다시 로그인 해야 해요.
          </ModalDetail>
          <ModalButton>
            <Button title="로그아웃" width={45} />
            <CancelButton
              onClick={() => {
                closeHandlerLogout();
              }}
            >
              취소
            </CancelButton>
          </ModalButton>
        </Container>
      </Modal>
      <Modal
        aria-labelledby="modal-titl"
        open={visibleDelete}
        onClose={closeHandlerDelete}
        width="90%"
      >
        <Container>
          <ModalImage src="/images/modal_image.svg" />
          <ModalTitle>투두몰을 탈퇴하실 건가요?</ModalTitle>
          <ModalDetail>
            지금까지 솔빈님이 이뤄낸 모든 도전 기록 내역이 사라져 복구할 수 없게
            돼요
          </ModalDetail>
          <ModalButton>
            <Button color="#F65050" title="탈퇴하기" width={45} />
            <CancelButton
              onClick={() => {
                closeHandlerDelete();
              }}
            >
              취소
            </CancelButton>
          </ModalButton>
        </Container>
      </Modal>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalTitle = styled.p`
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #000000;
  margin-top: 20px;
`;

const ModalDetail = styled.p`
  /* font-family: "PretendardMedium"; */
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
  gap: 10px;
  width: 100%;
`;

const CancelButton = styled.div`
  /* font-family: "PretendardMedium"; */
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 18px;
  margin-top: 40px;
  text-align: center;
  background: #ededed;
  border: 1px solid #ededed;
  width: 45%;
`;

const ModalImage = styled.img`
  width: 80%;
  margin-top: 30px;
`;

export default Modals;
