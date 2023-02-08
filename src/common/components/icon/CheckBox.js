import { COLOR } from "../../../constants";
import styled from "styled-components";

const CheckBox = ({ isCheck = false, onToggle }) => {
  return (
    <Container onClick={onToggle}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="24"
          height="24"
          rx="8"
          fill={isCheck ? COLOR.BLUE500 : COLOR.DISABLED}
        />
        <path
          d="M6.52637 12.4212L9.89479 15.7896L16.6316 9.05273"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Container>
  );
};

export default CheckBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
