import styled from "styled-components";

import { COLOR, FONT_STYLE } from "../../constants";

const HeadingL = ({ fontColor = COLOR.GRAY900, margin, children }) => {
    return (
        <Text margin={margin} fontColor={fontColor}>
            {children}
        </Text>
    );
};

export default HeadingL;

const Text = styled.p`
    color: ${props => props.fontColor};
    margin: ${props => props.margin};
    font-weight: ${FONT_STYLE.PRETENDARD_400.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_400.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_400.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_400.LETTER_SPACING};
`;
