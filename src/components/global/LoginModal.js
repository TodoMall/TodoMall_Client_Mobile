import * as React from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "../global";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "calc(100% - 32px)",
  bgcolor: "#FFFFFF",
  borderRadius: "32px",
  maxWidth: "500px",
  "z-index": 10,
};

const LoginModal = ({ isVisible, onToggle }) => {
  const navigate = useNavigate();

  const handleModal = () => {
    onToggle((prev) => !prev);
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Modal
      open={isVisible}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container>
          <ModalImage src="/images/modal_image.svg" />
          <ModalTitle>로그인 후 이용 가능합니다</ModalTitle>
          <ModalDetail>
            로그인 하시면 투두몰의
            <br />
            모든 컨텐츠를 확인하실 수 있습니다!
          </ModalDetail>
          <ModalButton>
            <Button
              title="취소"
              onClick={onToggle}
              width={45}
              borderRadius="20px"
              background="#FFFFFF"
              border="#c0c0c0"
              color="#444444"
            />

            <Button
              title="로그인"
              width={45}
              borderRadius="20px"
              background="#1890FF"
              onClick={handleLogin}
              color="#ffffff"
            />
          </ModalButton>
        </Container>
      </Box>
    </Modal>
  );
};
export default LoginModal;

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

const ModalImage = styled.img`
  width: 80%;
  max-width: 500px;
  margin-top: 30px;
`;
