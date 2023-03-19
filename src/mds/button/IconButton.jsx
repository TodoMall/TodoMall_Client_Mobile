import styled from "styled-components";

const IconButton = ({
    children = null,
    width = "2.5rem",
    height = "2.5rem",
    onClick: handleClick = () => {},
}) => {
    return (
        <Button width={width} height={height} onClick={handleClick}>
            {children}
        </Button>
    );
};

export default IconButton;

const Button = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};
`;
