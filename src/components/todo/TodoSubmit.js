import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../global/Header";

const TodoSubmit = () => {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const HandleImageUpload = async (e) => {
    const temp = e.target.files;
    console.log(temp);
    setImage(temp);
    // const formData = new FormData();
    // formData.append('file', e.target.files[0]);
  };

  const HandleSubmit = async () => {
    //axios post
    navigate("/todo/success");
  };

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  useEffect(() => {
    preview();

    return () => preview();
  });

  const preview = () => {
    if (!image) return false;

    const imgEL = document.querySelector(".img__box");
    const reader = new FileReader();

    reader.onload = () =>
      (imgEL.style.backgroundImage = `url(${reader.result})`);

    reader.readAsDataURL(image[0]);
  };

  return (
    <>
      <Header title={`피그마 알아보기 인증하기`} />
      <TodoSubmitBody>
        <TodoSubmitTitle>
          세션 인증을 위해 <span>피그마 세팅된 환경 업로드</span>를 준비해주세요
        </TodoSubmitTitle>
        <TodoSubmitSubtitle>
          피그마의 첫 프로젝트를 열어 준비된 환경을 캡처해서 업로드해주세요.
        </TodoSubmitSubtitle>
        {image ? (
          <TodoSubmitImage className="img__box" />
        ) : (
          <TodoSubmitContainer onClick={onUploadImageButtonClick}>
            <TodoSubmitLogo src="/images/todo_submit_camera.svg" />
            <input
              ref={inputRef}
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              onChange={HandleImageUpload}
            />
          </TodoSubmitContainer>
        )}
      </TodoSubmitBody>
      <TodoSubmitFooter>
        {image ? (
          <>
            <TodoSubmitButtonActive onClick={HandleSubmit}>
              인증 제출하기
            </TodoSubmitButtonActive>
            <TodoSubmitButtonActiveText>
              위 사진으로 제출할까요?
            </TodoSubmitButtonActiveText>
          </>
        ) : (
          <TodoSubmitButtonInactive>인증 제출하기</TodoSubmitButtonInactive>
        )}
      </TodoSubmitFooter>
    </>
  );
};

const TodoSubmitBody = styled.div`
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TodoSubmitTitle = styled.p`
  width: 327px;
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  span {
    color: #6b47fd;
  }
`;

const TodoSubmitSubtitle = styled.p`
  width: 327px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  color: #929292;
`;

const TodoSubmitImage = styled.div`
  width: 90vw;
  height: 50vh;
  background-size: cover;
  border-radius: 16px;
  background-position: center center;
`;

const TodoSubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 327px;
  height: 327px;
  background: #f4f4f4;
  border-radius: 16px;
  z-index: 1;
`;

const TodoSubmitLogo = styled.img`
  z-index: 10000;
`;

const TodoSubmitFooter = styled.div`
  position: fixed;
  background-color: #fbfbfb;
  width: 100%;
  bottom: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: none; */
`;

const TodoSubmitButtonActive = styled.div`
  width: 327px;
  height: 52px;
  background: #6b47fd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
`;

const TodoSubmitButtonActiveText = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #a495ff;
  position: absolute;
  top: 60px;
`;

const TodoSubmitButtonInactive = styled.div`
  width: 327px;
  height: 52px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ededed;
  color: #929292;
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
`;

export default TodoSubmit;
