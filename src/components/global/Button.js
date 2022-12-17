import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = ({ title, link, color = "#6b47fd", width = 90, onClick }) => {
  const navigate = useNavigate();
  return (
    <NoPlanButton
      onClick={() => {
        if (onClick) {
          onClick();
        } else {
          navigate(link);
        }
      }}
      color={color}
      width={width}
    >
      {title}
    </NoPlanButton>
  );
};

export default Button;

const NoPlanButton = styled.div`
  width: ${(props) => props.width}%;
  height: 60px;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  ${({ color }) =>
    color === "#6b47fd" || color === "#F65050"
      ? "color: white;"
      : "color: #929292;"}
  font-size: 18px;
  margin-top: 40px;
  text-align: center;
`;
