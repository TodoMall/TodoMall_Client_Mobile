import styled from "styled-components";
import { COLOR, FONT_WEIGTHT } from "../../constants";

const CategoryItem = ({ children, isCurrent = false }) => {
  return (
    <Container isCurrent={isCurrent}>
      <p>{children}</p>
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
  border-bottom: 2px solid ${COLOR.GRAY100};
  p {
    font-size: 1rem;
    line-height: 2.5rem;
    letter-spacing: 0em;
    border-bottom: 2px solid
      ${(props) => (props.isCurrent ? COLOR.BRAND_COLOR : COLOR.GRAY100)};
    font-weight: ${(props) =>
      props.isCurrent
        ? FONT_WEIGTHT.PRETENDARD_BOLD
        : FONT_WEIGTHT.PRETENDARD_MEDIUM};
    color: ${(props) => (props.isCurrent ? COLOR.BRAND_COLOR : COLOR.GRAY500)};
  }
`;
