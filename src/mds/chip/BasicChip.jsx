import styled from "styled-components";
import { COLOR, FONT_WEIGTHT, FONT_STYLE } from "../../constants";

const BasicChip = ({
  title = null,
  width = "auto",
  height = "2rem",
  margin = "0.25rem 0.125rem",
  backgroundColor = COLOR.GRAY100,
  fontColor = COLOR.GRAY800,
  borderRadius = "1.25rem",
  isDisabled = false,
  onClick: handleClick = () => {},
}) => {
  return (
    <Container
      width={width}
      height={height}
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
  padding: 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  p {
    display: inline-block;
    white-space: nowrap;
    font-weight: ${FONT_WEIGTHT.PRETENDARD_MEDIUM};
    font-size: ${FONT_STYLE.PRETENDARD_200.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_200.HEIGTH};
    letter-spacing: -0.01em;
    color: ${(props) => (props.isDisabled ? COLOR.GRAY300 : props.fontColor)};
    text-align: center;
  }
`;
