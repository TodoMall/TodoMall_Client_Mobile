import { COLOR } from "../constants";
import styled from "styled-components";

const Divider = ({
  width = "100%",
  height = "1px",
  margin = "none",
  color = COLOR.GRAY100,
}) => {
  return (
    <StyledDivider
      width={width}
      height={height}
      margin={margin}
      color={color}
    />
  );
};

export default Divider;

const StyledDivider = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: none;
  background-color: ${(props) => props.color};
`;
