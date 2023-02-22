import styled from "styled-components";
import { FONT_STYLE } from "../../constants";

const DetailXS = ({ fontColor, margin, children }) => {
  return (
    <Text margin={margin} fontColor={fontColor}>
      {children}
    </Text>
  );
};

export default DetailXS;

const Text = styled.p`
  color: ${(props) => props.fontColor};
  margin: ${(props) => props.margin};
  font-weight: ${FONT_STYLE.PRETENDARD_50.WEIGTHT};
  font-size: ${FONT_STYLE.PRETENDARD_50.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_50.HEIGHT};
  letter-spacing: ${FONT_STYLE.PRETENDARD_50.LETTER_SPACING};
`;
