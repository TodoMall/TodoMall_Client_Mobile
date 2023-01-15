import React from "react";
import styled from "styled-components";

const Button = ({
  title,
  background = "#6b47fd",
  color = "#6b47fd",
  width = 90,
  onClick,
  borderRadius = "20px",
  border = "#6b47fd",
  margin = "40px 0 0 0",
}) => {
  return (
    <NoPlanButton
      onClick={onClick}
      color={color}
      border={border}
      width={width}
      borderRadius={borderRadius}
      background={background}
      margin={margin}
    >
      {title}
    </NoPlanButton>
  );
};

export default Button;
const NoPlanButton = styled.div`
  width: ${(props) => props.width}%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: 1px solid ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  font-size: 18px;
  text-align: center;
  margin: ${(props) => props.margin}; ;
`;
