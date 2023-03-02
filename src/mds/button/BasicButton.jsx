import styled from "styled-components";

import { COLOR } from "../../constants";

const BasicButton = ({
    children = null,
    backgroundColor = COLOR.BRAND_COLOR,
    fontColor = COLOR.WHITE,
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
            backgroundColor={isDisabled ? COLOR.DISABLED : backgroundColor}
            borderRadius={borderRadius}
            height={height}
            width={width}
            fontColor={fontColor}
            margin={margin}
            padding={padding}
            isDisabled={isDisabled}
            onClick={handleClick}
        >
            {children}
        </Container>
    );
};

export default BasicButton;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
`;
