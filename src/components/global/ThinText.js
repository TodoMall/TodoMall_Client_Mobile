import styled from "styled-components";

const ThinText = ({
  children,
  width = "50%",
  margin = "none",
  textAlign = "left",
  fontWeight = "400",
  fontSize = "14px",
  lineHeight = "21px",
}) => {
  return (
    <ThinTag
      width={width}
      margin={margin}
      textAlign={textAlign}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {children}
    </ThinTag>
  );
};

export default ThinText;

const ThinTag = styled.p`
  font-family: Pretendard;
  letter-spacing: -0.01em;
  color: #888888;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;
