import styled from "styled-components";

const ColBox = ({ children }) => {
    return <Container>{children}</Container>;
};

export default ColBox;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
