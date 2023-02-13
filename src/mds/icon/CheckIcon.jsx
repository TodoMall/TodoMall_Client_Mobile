import { COLOR } from "../../constants";
import { useToggle } from "../../hooks";
import styled from "styled-components";

const CheckIcon = ({
  width = "2.5rem",
  height = "2.5rem",
  initialValue = false,
}) => {
  const [state, _, handleState] = useToggle(initialValue);
  return (
    <Container width={width} height={height} onClick={handleState}>
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
          fill={state ? COLOR.MAIN500 : COLOR.GRAY200}
        />
        <path
          d="M6.52637 12.4212L9.89479 15.7896L16.6316 9.05273"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Container>
  );
};

export default CheckIcon;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
