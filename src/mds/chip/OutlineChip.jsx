import styled from "styled-components";

import { COLOR } from "../../constants";

const OutlineChip = ({
    children = null,
    width = "auto",
    height = "2rem",
    backgroundColor = COLOR.WHITE,
    borderColor = COLOR.GRAY800,
    fontColor = COLOR.GRAY800,
    borderRadius = "1.25rem",
    margin = "0.25rem 0.125rem",
    isDisabled = false,
    onClick: handleClick = () => {},
}) => {
    return (
        <Container
            width={width}
            height={height}
            margin={margin}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            fontColor={fontColor}
            borderRadius={borderRadius}
            isDisabled={isDisabled}
            onClick={handleClick}
        >
            <p>{children}</p>
        </Container>
    );
};

export default OutlineChip;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    background-color: ${props => props.backgroundColor};
    border: 1px solid ${props => props.borderColor};
    border-radius: ${props => props.borderRadius};

    p {
        text-align: center;
        color: ${props => props.fontColor};
    }
`;
