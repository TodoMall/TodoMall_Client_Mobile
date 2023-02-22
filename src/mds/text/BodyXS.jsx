import styled from "styled-components";

import { FONT_STYLE } from "../../constants";

const BodyXS = ({ fontColor, margin, children }) => {
    return (
        <Text margin={margin} fontColor={fontColor}>
            {children}
        </Text>
    );
};

export default BodyXS;

const Text = styled.p`
    color: ${props => props.fontColor};
    margin: ${props => props.margin};
    font-weight: ${FONT_STYLE.PRETENDARD_125.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_125.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_125.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_125.LETTER_SPACING};
`;
