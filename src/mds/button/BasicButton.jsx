import styled from "styled-components";

import { COLOR } from "../../constants";

const BasicButton = ({
    children = null,
    backgroundColor = COLOR.BRAND_COLOR,
    borderRadius = "1.25rem",
    width = "100%",
    height = "3.25rem",
    margin = "1rem 0 0.5rem 0",
    padding = "0 1.5rem;",
    isDisabled = false,
    onClick: handleClick = () => {},
}) => {
    return (
        <Container
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            width={width}
            height={height}
            margin={margin}
            padding={padding}
            disabled={isDisabled}
            onClick={handleClick}
        >
            {children}
        </Container>
    );
};

export default BasicButton;

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    border: none;
    border-radius: ${props => props.borderRadius};
`;
