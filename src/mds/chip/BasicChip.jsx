import styled from "styled-components";

import { COLOR } from "../../constants";

const BasicChip = ({
    children,
    margin = "0.25rem 0.125rem",
    backgroundColor = COLOR.GRAY100,
    borderRadius = "1.25rem",
    isDisabled = false,
    onClick: handleClick = () => {},
}) => {
    return (
        <Container
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            isDisabled={isDisabled}
            margin={margin}
            onClick={handleClick}
        >
            {children}
        </Container>
    );
};

export default BasicChip;

const Container = styled.div`
    padding: 0 10px;
    width: auto;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin};
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    cursor: pointer;
`;
