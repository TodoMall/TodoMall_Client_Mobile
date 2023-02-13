import styled from "styled-components";
import { COLOR } from "../../constants/color";

const OutlineChip = ({
  children = null,
  width = "auto",
  height = "auto",
  backgroundColor = COLOR.WHITE,
  borderColor = COLOR.BRAND_COLOR,
  fontColor = COLOR.BRAND_COLOR,
  borderRadius = "1.25rem",
  onClick: handleClick = () => {},
}) => {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      fontColor={fontColor}
      borderRadius={borderRadius}
      onClick={handleClick}
    >
      <p>{children}</p>
    </Container>
  );
};

export default OutlineChip;

const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};

  p {
    text-align: center;
    color: ${(props) => props.fontColor};
  }
`;
