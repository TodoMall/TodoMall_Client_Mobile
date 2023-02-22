import styled from "styled-components";

const RowBox = ({
    children,
    height = "auto",
    padding = "0",
    justifyContent = "center",
}) => {
    return (
        <Container
            height={height}
            padding={padding}
            justifyContent={justifyContent}
        >
            {children}
        </Container>
    );
};

export default RowBox;

const Container = styled.div`
    width: 100%;
    height: ${props => props.height};
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: center;
    flex-direction: row;
    padding: ${props => props.padding};
`;
