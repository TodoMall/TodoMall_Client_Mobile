import styled from "styled-components";

import { COLOR, FONT_STYLE } from "../../constants";

const TextButton = ({
    children = null,
    height = "auto",
    margin = "none",
    fontColor = COLOR.BLACK,
    fontWeight = FONT_STYLE.PRETENDARD_225.WEIGTHT,
    fontSize = FONT_STYLE.PRETENDARD_225.SIZE,
    lineHeight = FONT_STYLE.PRETENDARD_225.HEIGHT,
    textAlign = "center",
    hasUnderline = false,
    onClick: handleClick = () => {},
}) => {
    return (
        <Container
            height={height}
            margin={margin}
            fontWeight={fontWeight}
            fontSize={fontSize}
            fontColor={fontColor}
            lineHeight={lineHeight}
            textAlign={textAlign}
            hasUnderline={hasUnderline}
            onClick={handleClick}
        >
            {children}
        </Container>
    );
};

export default TextButton;

const Container = styled.div`
    width: auto;
    height: ${props => props.height};
    margin: ${props => props.margin};
    p {
        color: ${props => props.fontColor};
        text-align: ${props => props.textAlign};
        font-weight: ${props => props.fontWeight};
        font-size: ${props => props.fontSize};
        line-height: ${props => props.lineHeight};
        text-decoration: ${props => props.hasUnderline};
        cursor: pointer;
        letter-spacing: -0.01em;
        &:hover,
        &:active {
            /* TODO : wirte something.. */
        }
    }
`;
