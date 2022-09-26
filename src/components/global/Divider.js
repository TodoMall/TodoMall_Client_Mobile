import React from "react";
import styled from "styled-components";
import { MAX_WIDTH } from "../../constants";
const Divider = ({ width = MAX_WIDTH }) => {
  return <DividerStyle width={width} />;
};

const DividerStyle = styled.hr`
  width: 100vw;
  max-width: ${(props) => props.width};
  height: 8px;
  background-color: #f2f2f2;
  border: none;
`;

export default Divider;
