import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = ({ title, link, color = "#6b47fd" }) => {
  const navigate = useNavigate();

  return (
    <NoPlanButton
      onClick={() => {
        navigate(link);
      }}
      color={color}
    >
      {title}
    </NoPlanButton>
  );
};

const NoPlanButton = styled.div`
  font-family: "PretendardMedium";
  width: 90%;
  height: 60px;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  font-size: 18px;
  margin-top: 40px;
  text-align: center;
`;

export default Button;
