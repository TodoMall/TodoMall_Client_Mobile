import { COLOR } from "../constants";
import styled from "styled-components";

const Divider = ({
  height = "1px",
  margin = "none",
  color = COLOR.GRAY100,
}) => {
  return <StyledDivider height={height} margin={margin} color={color} />;
};

export default Divider;

const StyledDivider = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: none;
  background-color: ${(props) => props.color};
`;
