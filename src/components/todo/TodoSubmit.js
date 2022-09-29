import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../global/Header";
import AWS from "aws-sdk";
import axios from "axios";
import { Loader } from "../global/Loader";

const TodoSubmit = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState(localStorage.getItem("name"));
  const [id, setId] = useState(localStorage.getItem("userid"));
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const region = "ap-northeast-2";
  const bucket = "todomall-assignment-images";

  AWS.config.update({
    region: region,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

  const handleImageUpload = async (e) => {
    const temp = e.target.files;
    setImage(temp);
    console.log(temp);
  };

  const handleSubmit = async () => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: bucket,
        Key:
          id +
          "/" +
          params.productid +
          "/" +
          params.todoname +
          "/" +
          new Date().getTime() +
          ".png",
        Body: image[0],
      },
    });

    const promise = upload.promise();
    promise.then((res) => {
      console.log(res);
      axios.patch(
        `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user/product`,
        {
          userId: localStorage.getItem("userid"),
          productId: params.productid,
          missionImage: res.Location,
          sessionId: params.sessionid,
        }
      );
    });
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
      <Header title={params.todoname} />
      <TodoSubmitBody>
        <TodoSubmitTitle>
          세션 인증을 위해 <span>{params.todoname}</span>를 준비해주세요
        </TodoSubmitTitle>
        <TodoSubmitSubtitle>
          준비된 환경을 캡처해서 업로드해주세요.
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
              onChange={handleImageUpload}
            />
          </TodoSubmitContainer>
        )}
      </TodoSubmitBody>
      <TodoSubmitFooter>
        {image ? (
          <>
            <TodoSubmitButtonActive onClick={handleSubmit}>
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
  padding-bottom: 110px;
`;

const TodoSubmitTitle = styled.p`
  width: 340px;
  /* font-family: "PretendardMedium"; */
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
  width: 345px;
  padding-top: 20px;
  padding-bottom: 20px;
  /* font-family: "PretendardRegular"; */
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
  height: 100px;
  bottom: 0;
  display: flex;
  /* align-items: center; */
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
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
`;

const TodoSubmitButtonActiveText = styled.p`
  /* font-family: "PretendardRegular"; */
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
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
`;

export default TodoSubmit;
