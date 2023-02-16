import styled from "styled-components";

const PreviousArrowIcon = () => {
  return (
    <Container>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 6L8 12L14 18"
          stroke="#31363E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Container>
  );
};

export default PreviousArrowIcon;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: scaleX(-1);
`;
