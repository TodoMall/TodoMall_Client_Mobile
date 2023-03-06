import styled from "styled-components";

const ColBox = ({ children, margin = "0" }) => {
    return <Container margin={margin}>{children}</Container>;
};

export default ColBox;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin};
`;
