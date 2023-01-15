import React from "react";
import { Modal } from "@nextui-org/react";
import Button from "../global/Button";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MAX_WIDTH } from "../../constants";

const Modals = ({
  visibleLogout,
  closeHandlerLogout,
  visibleDelete,
  closeHandlerDelete,
}) => {
  const NAME = localStorage.getItem("name");
  const EMAIL = localStorage.getItem("email");
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access");

  const handleLogout = () => {
    axios
      .get(
        `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&logout_redirect_uri=${process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI}`
      )
      .then((res) => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("ID");
        navigate("/");
      })
      .catch((err) => {});
  };

  const handleDelete = async () => {
    await axios
      .post(
        "https://kapi.kakao.com/v1/user/unlink",
        {},
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((res) => {
        localStorage.clear();
        axios
          .patch(`${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user`, {
            email: EMAIL,
            status: false,
          })
          .then((res) => {
            navigate("/");
          });
      })
      .catch((err) => {});
  };

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        open={visibleLogout}
        onClose={closeHandlerLogout}
        width={"calc(100% - 32px)"}
        style={{ borderRadius: "32px" }}
      >
        <Container>
          <ModalImage src="/images/modal_image.svg" />
          <ModalTitle>정말 로그아웃 하실 건가요?</ModalTitle>
          <ModalDetail>
            이후 서비스를 이용할 시 로그인 해야 하고 중요한 알림을 받을 수
            없어요.
          </ModalDetail>
          <ModalButton>
            <Button
              title="로그아웃"
              width={45}
              borderRadius="20px"
              onClick={handleLogout}
              color="#ffffff"
            />
            <Button
              title="취소"
              onClick={closeHandlerLogout}
              width={45}
              borderRadius="20px"
              background="#FFFFFF"
              border="#c0c0c0"
              color="#444444"
            />
          </ModalButton>
        </Container>
      </Modal>

      <Modal
        aria-labelledby="modal-titl"
        open={visibleDelete}
        onClose={closeHandlerDelete}
        width={"calc(100% - 32px)"}
        style={{ borderRadius: "32px" }}
      >
        <Container>
          <ModalImage src="/images/modal_image.svg" />
          <ModalTitle>투두몰을 탈퇴하실 건가요?</ModalTitle>
          <ModalDetail>
            지금까지 {NAME}님이 이뤄낸 모든 도전 기록 내역이 사라져 복구할 수
            없게 돼요
          </ModalDetail>
          <ModalButton>
            <Button
              title="탈퇴하기"
              width={45}
              onClick={handleDelete}
              color="#ffffff"
              background="#FF4D4F"
              border="none"
            />
            <Button
              title="취소"
              onClick={closeHandlerDelete}
              width={45}
              background="#FFFFFF"
              border="#c0c0c0"
              color="#444444"
            />
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
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #222222;
  margin-top: 16px;
`;

const ModalDetail = styled.p`
  width: 224px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  margin-top: 8px;
  color: #444444;
  word-break: keep-all;
`;

const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  width: calc(100% - 29px);
`;

const CancelButton = styled.div`
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
  max-width: ${MAX_WIDTH};
  margin-top: 30px;
`;

export default Modals;
