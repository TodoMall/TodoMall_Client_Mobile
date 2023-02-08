import styled from "styled-components";

const ArrowIcon = ({ reversal = false }) => {
  return (
    <Container reversal={reversal}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 18L16 12L10 6"
          stroke="#31363E"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Container>
  );
};

export default ArrowIcon;

const Container = styled.div`
  transform: scaleX(${(props) => (props.reversal ? -1 : 1)});
`;
