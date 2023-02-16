import { CATEGORY_TAG } from "../../constants";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";

const CategoryTabBar = () => {
  return (
    <TabBar>
      {CATEGORY_TAG.map((tag) => {
        return <CategoryItem key={tag} categoryTitle={tag} />;
      })}
    </TabBar>
  );
};

export default CategoryTabBar;

const TabBar = styled.div`
  display: flex;
  div {
    &:first-child {
      margin: 0 1.25rem 0 0;
    }
    margin: 0 1.25rem;
  }
`;
