import React from "react";
import styled from "styled-components";

const primaryColor = "#6b47fd";
const secondaryColor = "#F65050";
const whiteColor = "#FFFFFF";
const grayColor = "#929292";

const Button = ({ title, color = "#6b47fd", width = 90, onClick }) => {
  return (
    <NoPlanButton onClick={onClick} color={color} width={width}>
      {title}
    </NoPlanButton>
  );
};

export default Button;
const NoPlanButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}%;
  height: 60px;
  border: 1px solid ${(props) => props.color};
  border-radius: 30px;
  background: ${(props) => props.color};
  ${({ color }) =>
    color === primaryColor || color === secondaryColor ? whiteColor : grayColor}
  font-size: 18px;
  text-align: center;
  margin-top: 40px;
`;
