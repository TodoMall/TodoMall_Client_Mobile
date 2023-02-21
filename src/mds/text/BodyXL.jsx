import styled from "styled-components";
import { FONT_STYLE } from "../../constants";

const BodyXL = ({ fontColor, textAlign, margin, children }) => {
  return (
    <Text margin={margin} textAlign={textAlign} fontColor={fontColor}>
      {children}
    </Text>
  );
};

export default BodyXL;

const Text = styled.p`
  color: ${(props) => props.fontColor};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  font-weight: ${FONT_STYLE.PRETENDARD_250.WEIGTHT};
  font-size: ${FONT_STYLE.PRETENDARD_250.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_250.HEIGHT};
  letter-spacing: ${FONT_STYLE.PRETENDARD_250.LETTER_SPACING};
`;
