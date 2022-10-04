import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../global/Header";
import AWS from "aws-sdk";
import axios from "axios";
import { Loader } from "../global/Loader";

const TodoSubmit = () => {
  const [image, setImage] = useState("");
  const [id, setId] = useState(localStorage.getItem("userid"));
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState({});
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const params = useParams();

  const region = "ap-northeast-2";
  const bucket = "todomall-assignment-images";

  AWS.config.update({
    region: region,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

  const handleImageUpload = async (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: bucket,
        Key:
          id +
          "/" +
          params.planid +
          "/" +
          params.todoname +
          "/" +
          new Date().getTime() +
          ".png",
        Body: image,
      },
    });

    const promise = upload.promise();
    promise.then((res) => {
      console.log(res);
      axios
        .patch(`${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user/product`, {
          userId: localStorage.getItem("userid"),
          productId: params.planid,
          sessionId: params.sessionid,
          missionImage: res.Location,
        })
        .then((res) => {
          console.log(res);
          setLoading(false);
          navigate("/todo/success");
        });
    });
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

  useEffect(() => {
    fetch();
  }, []);

  const preview = () => {
    if (!image) return false;

    const imgEL = document.querySelector(".img__box");
    const reader = new FileReader();

    reader.onload = () =>
      (imgEL.style.backgroundImage = `url(${reader.result})`);

    reader.readAsDataURL(image);
  };

  const fetch = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products?id=${params.productid}`
      )
      .then((res) => {
        console.log(res);
        setPlan(
          res.data.sessions.filter(
            (session) => session.id === params.sessionid
          )[0]
        );
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header title={params.todoname} />
      <TodoSubmitBody>
        <TodoSubmitTitle>
          세션 인증을 위해 <span>{plan.missionTitle}</span>
        </TodoSubmitTitle>
        <TodoSubmitSubtitle>{plan.description}</TodoSubmitSubtitle>
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
  width: 90vw;
  max-width: 450px;
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
  width: 90vw;
  max-width: 450px;
  padding-top: 20px;
  padding-bottom: 20px;
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
  width: 90vw;
  max-width: 450px;
  height: 90vw;
  max-height: 450px;
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
  justify-content: center;
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
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
`;

const TodoSubmitButtonActiveText = styled.p`
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
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
`;

export default TodoSubmit;
