import styled from "styled-components";
import { COLOR } from "../../constants/color";

const BasicChip = ({
  children = null,
  width = "auto",
  height = "auto",
  backgroundColor = COLOR.BRAND_COLOR,
  fontColor = COLOR.WHITE,
  borderRadius = "1.25rem",
  onClick: handleClick = () => {},
}) => {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      borderRadius={borderRadius}
      onClick={handleClick}
    >
      <p>{children}</p>
    </Container>
  );
};

export default BasicChip;

const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  p {
    color: ${(props) => props.fontColor};
    text-align: center;
  }
`;
