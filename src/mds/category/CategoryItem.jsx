import styled from "styled-components";
import { COLOR, FONT_WEIGTHT, FONT_STYLE } from "../../constants";

const CategoryItem = ({
  title,
  isCurrent = false,
  fontColor = COLOR.GRAY500,
  onClick: handleClick = () => {},
}) => {
  return (
    <Container
      onClick={handleClick}
      isCurrent={isCurrent}
      fontColor={fontColor}
    >
      <p>{title}</p>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0.75rem 0 0.5rem;
  cursor: pointer;
  p {
    white-space: nowrap;
    font-weight: ${FONT_WEIGTHT.PRETENDARD_MEDIUM};
    font-size: ${FONT_STYLE.PRETENDARD_300.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_300.HEIGTH};
    letter-spacing: -0.01em;
    color: ${(props) =>
      props.isCurrent ? COLOR.BRAND_COLOR : props.fontColor};
    border-bottom: 1px solid
      ${(props) => (props.isCurrent ? COLOR.BRAND_COLOR : "none")};
  }
`;
