import styled from "styled-components";

import { COLOR, FONT_STYLE } from "../../constants";

const BodyS = ({ fontColor = COLOR.GRAY900, margin, children }) => {
    return (
        <Text margin={margin} fontColor={fontColor}>
            {children}
        </Text>
    );
};

export default BodyS;

const Text = styled.p`
    color: ${props => props.fontColor};
    margin: ${props => props.margin};
    font-weight: ${FONT_STYLE.PRETENDARD_150.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_150.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_150.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_150.LETTER_SPACING};
`;
