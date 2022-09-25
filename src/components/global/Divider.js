import React from "react";
import styled from "styled-components";
const Divider = () => {
  return <DividerStyle />;
};

const DividerStyle = styled.hr`
  width: 100vw;
  max-width: 800px;
  height: 8px;
  background-color: #f2f2f2;
  border: none;
`;

export default Divider;
