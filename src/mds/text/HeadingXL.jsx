import styled from "styled-components";
import { FONT_STYLE } from "../../constants";

const HeadingXL = ({ fontColor, margin, children }) => {
  return (
    <Text margin={margin} fontColor={fontColor}>
      {children}
    </Text>
  );
};

export default HeadingXL;

const Text = styled.p`
  color: ${(props) => props.fontColor};
  margin: ${(props) => props.margin};
  font-weight: ${FONT_STYLE.PRETENDARD_450.WEIGTHT};
  font-size: ${FONT_STYLE.PRETENDARD_450.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_450.HEIGHT};
  letter-spacing: ${FONT_STYLE.PRETENDARD_450.LETTER_SPACING};
`;
