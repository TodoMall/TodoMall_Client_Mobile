import styled from "styled-components";
import { COLOR, FONT_WEIGTHT } from "../../constants";

const CategoryItem = ({
  title,
  isCurrent = false,
  onClick: handleClick = () => {},
}) => {
  return (
    <Container onClick={handleClick} isCurrent={isCurrent}>
      <p>{title}</p>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  width: 4rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    letter-spacing: -0.01em;
    font-weight: ${FONT_WEIGTHT.PRETENDARD_BOLD};
    color: ${(props) => (props.isCurrent ? COLOR.BRAND_COLOR : COLOR.GRAY700)};
  }
`;
