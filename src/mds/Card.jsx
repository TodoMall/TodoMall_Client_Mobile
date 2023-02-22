import styled from "styled-components";

import { COLOR } from "../constants";

const Card = ({
    children,
    width = "100%",
    height = "auto",
    margin = "0.5rem 0",
    padding = "1rem 1.25rem",
    borderRadius = "1.25rem",
    alignItems = "center",
    justifyContent = "center",
    backgroundColor = COLOR.MAIN50,
    onClick: handleClick = () => {},
}) => {
    return (
        <Container
            width={width}
            height={height}
            padding={padding}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}
            justifyContent={justifyContent}
            alignItems={alignItems}
            margin={margin}
            onClick={handleClick}
        >
            {children}
        </Container>
    );
};

export default Card;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    height: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.backgroundColor};
`;
