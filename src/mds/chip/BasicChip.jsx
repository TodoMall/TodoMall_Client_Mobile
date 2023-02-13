import styled from "styled-components";
import { COLOR } from "../../constants/color";

const BasicChip = ({
  children = null,
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
      <p>{children}</p>
    </Container>
  );
};

export default BasicChip;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  p {
    color: ${(props) => props.fontColor};
    text-align: center;
  }
`;
