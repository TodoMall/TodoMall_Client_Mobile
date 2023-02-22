import styled from "styled-components";

import { FONT_STYLE } from "../../constants";

const BodyM = ({ fontColor, margin, children }) => {
    return (
        <Text margin={margin} fontColor={fontColor}>
            {children}
        </Text>
    );
};

export default BodyM;

const Text = styled.p`
    color: ${props => props.fontColor};
    margin: ${props => props.margin};
    font-weight: ${FONT_STYLE.PRETENDARD_200.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_200.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_200.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_200.LETTER_SPACING};
`;
