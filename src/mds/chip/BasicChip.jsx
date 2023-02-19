import styled from "styled-components";
import { COLOR, FONT_WEIGTHT, FONT_STYLE } from "../../constants";

const BasicChip = ({
  title = null,
  margin = "0.25rem 0.125rem",
  backgroundColor = COLOR.GRAY100,
  fontColor = COLOR.GRAY800,
  borderRadius = "1.25rem",
  isDisabled = false,
  fontWeight = FONT_WEIGTHT.PRETENDARD_MEDIUM,
  fontSize = FONT_STYLE.PRETENDARD_200.SIZE,
  lineHeight = FONT_STYLE.PRETENDARD_200.HEIGTH,
  onClick: handleClick = () => {},
}) => {
  return (
    <Container
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      borderRadius={borderRadius}
      isDisabled={isDisabled}
      margin={margin}
      onClick={handleClick}
    >
      <p>{title}</p>
    </Container>
  );
};

export default BasicChip;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  p {
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.borderRadius};
    letter-spacing: -0.01em;
    color: ${(props) => (props.isDisabled ? COLOR.GRAY300 : props.fontColor)};
    text-align: center;
    padding: 0 1rem;
  }
`;
