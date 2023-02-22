import styled from "styled-components";

import { FONT_STYLE } from "../../constants";

const HeadingXXL = ({ fontColor, margin, children }) => {
    return (
        <Text margin={margin} fontColor={fontColor}>
            {children}
        </Text>
    );
};

export default HeadingXXL;

const Text = styled.p`
    color: ${props => props.fontColor};
    margin: ${props => props.margin};
    font-weight: ${FONT_STYLE.PRETENDARD_500.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_500.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_500.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_500.LETTER_SPACING};
`;
