import styled from "styled-components";

const BorderText = ({
  children,
  width,
  margin,
  textAlign,
  fontWeight,
  fontSize,
  lineHeight,
}) => {
  return (
    <BorderTag
      width={width}
      margin={margin}
      textAlign={textAlign}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {children}
    </BorderTag>
  );
};

export default BorderText;

const BorderTag = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  letter-spacing: -0.01em;
  color: #222222;
  font-size: ${(props) => props.fontSize ?? "14px"};
  line-height: ${(props) => props.lineHeight ?? "21px"};
  font-weight: ${(props) => props.fontWeight ?? "400"};
  text-align: ${(props) => props.textAlign ?? "none"};
  width: ${(props) => props.width ?? "50%"};
  margin: ${(props) => props.margin};
`;
