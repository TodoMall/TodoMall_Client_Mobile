import styled from "styled-components";

import { COLOR, FONT_STYLE } from "../../constants";

const DetailS = ({ fontColor = COLOR.GRAY900, margin, children }) => {
    return (
        <Text margin={margin} fontColor={fontColor}>
            {children}
        </Text>
    );
};

export default DetailS;

const Text = styled.p`
    color: ${props => props.fontColor};
    margin: ${props => props.margin};
    font-weight: ${FONT_STYLE.PRETENDARD_75.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_75.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_75.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_75.LETTER_SPACING};
`;
