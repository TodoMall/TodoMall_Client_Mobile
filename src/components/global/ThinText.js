import styled from "styled-components";

const ThinText = ({
  children,
  width,
  margin,
  textAlign,
  fontWeight,
  fontSize,
  lineHeight,
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
  font-weight: ${(props) => props.fontWeight ?? "400"};
  font-size: ${(props) => props.fontSize ?? "14px"};
  line-height: ${(props) => props.lineHeight ?? "21px"};
  text-align: ${(props) => props.textAlign ?? "left"};
  width: ${(props) => props.width ?? "50%"};
  margin: ${(props) => props.margin ?? ""};
`;
