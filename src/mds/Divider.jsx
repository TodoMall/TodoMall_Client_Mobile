import { COLOR } from "../constants";
import styled from "styled-components";

const Divider = ({ height = "1px", color = COLOR.GRAY100 }) => {
  return <StyledDivider height={height} color={color} />;
};

export default Divider;

const StyledDivider = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  border: none;
  background-color: ${(props) => props.color};
`;
