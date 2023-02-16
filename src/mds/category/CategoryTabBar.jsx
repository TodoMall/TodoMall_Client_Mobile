import CategoryItem from "./CategoryItem";
import styled from "styled-components";

const CategoryTabBar = () => {
  const categories = [
    "BEST",
    "노코드 툴",
    "협업 툴",
    "마케팅 툴",
    "디자인 툴",
    "기획 툴",
    "부수익",
    "일상",
  ];
  return (
    <Container>
      {categories.map((category) => {
        return <CategoryItem key={category} categoryTitle={category} />;
      })}
    </Container>
  );
};

export default CategoryTabBar;

const Container = styled.div`
  display: flex;
  div {
    &:first-child {
      margin: 0 1.25rem 0 0;
    }
    margin: 0 1.25rem;
  }
`;
