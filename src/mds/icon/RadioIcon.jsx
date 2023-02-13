import { COLOR } from "../../constants";
import { useToggle } from "../../hooks";
import styled from "styled-components";

const RadioIcon = ({
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
          x="1"
          y="1"
          width="22"
          height="22"
          rx="11"
          fill="white"
          stroke={state ? COLOR.MAIN500 : COLOR.GRAY200}
          strokeWidth="2"
        />
        <rect
          x="7"
          y="7"
          width="10"
          height="10"
          rx="5"
          fill={state ? COLOR.MAIN500 : null}
        />
      </svg>
    </Container>
  );
};

export default RadioIcon;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
