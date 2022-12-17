import React from "react";
import styled from "styled-components";
import { MAX_WIDTH } from "../../constants";
const Divider = ({
  width = MAX_WIDTH,
  margin = "none",
  height = "8px",
  backgroundColor = "#f2f2f2",
  border = "none",
}) => {
  return (
    <DividerStyle
      width={width}
      height={height}
      margin={margin}
      border={border}
      backgroundColor={backgroundColor}
    />
  );
};

export default Divider;

const DividerStyle = styled.hr`
  width: 100vw;
  max-width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
`;
