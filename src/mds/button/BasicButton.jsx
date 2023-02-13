import styled from "styled-components";
import { COLOR } from "../../constants/color";

const BasicButton = ({
  children = null,
  backgroundColor = COLOR.BRAND_COLOR,
  fontColor = COLOR.WHITE,
  borderRadius = "1.25rem",
  height = "auto",
  isDisabled = false,
  onClick: handleClick = () => {},
}) => {
  return (
    <Container
      backgroundColor={isDisabled ? COLOR.DISABLED : backgroundColor}
      borderRadius={borderRadius}
      height={height}
      fontColor={fontColor}
      onClic={handleClick}
    >
      <p>{children}</p>
    </Container>
  );
};

export default BasicButton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  p {
    color: ${(props) => props.fontColor};
  }
`;
