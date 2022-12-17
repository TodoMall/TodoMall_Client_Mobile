import styled from "styled-components";

const Label = ({ children }) => {
  return <LabelTag>{children}</LabelTag>;
};

export default Label;

const LabelTag = styled.div`
  height: 35px;
  align-self: flex-start;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  display: inline-block;
`;
