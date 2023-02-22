import styled from "styled-components";

import { FONT_STYLE } from "../../constants";

const BodyL = ({ fontColor, margin, children }) => {
    return (
        <Text margin={margin} fontColor={fontColor}>
            {children}
        </Text>
    );
};

export default BodyL;

const Text = styled.p`
    color: ${props => props.fontColor};
    margin: ${props => props.margin};
    font-weight: ${FONT_STYLE.PRETENDARD_225.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_225.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_225.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_225.LETTER_SPACING};
`;
