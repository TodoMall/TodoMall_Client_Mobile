import React from "react";
import styled from "styled-components";
import { MAX_WIDTH } from "../../constants";
const Divider = () => {
  return <DividerStyle />;
};

const DividerStyle = styled.hr`
  width: 100vw;
  max-width: ${MAX_WIDTH}px;
  height: 8px;
  background-color: #f2f2f2;
  border: none;
`;

export default Divider;
