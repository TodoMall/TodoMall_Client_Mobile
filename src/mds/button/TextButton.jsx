import styled from "styled-components";
import { COLOR } from "../../constants/color";
import { FontStyle, FontWeigtht } from "../../constants/font";

const TextButton = ({
  children = null,
  height = "auto",
  fontColor = COLOR.BLACK,
  fontWeight = FontWeigtht.pretendard_medium,
  fontSize = FontStyle.pretendard_300.size,
  lineHeight = FontStyle.pretendard_300.heigth,
  textAlign = "center",
  hasUnderline = false,
  onClick: handleClick = () => {},
}) => {
  return (
    <Container height={height} onClick={handleClick}>
      <p
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
        lineHeight={lineHeight}
        textAlign={textAlign}
        hasUnderline={hasUnderline}
      >
        {children}
      </p>
    </Container>
  );
};

export default TextButton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  p {
    text-align: ${(props) => props.textAlign};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontWeight};
    line-height: ${(props) => props.fontWeight};
    text-decoration: underline;
    cursor: pointer;
    letter-spacing: -0.01em;
    &:hover,
    &:active {
      /* TODO : wirte something.. */
    }
  }
`;
