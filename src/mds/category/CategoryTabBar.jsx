import { CATEGORY_TAG, COLOR } from "../../constants";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";

const CategoryTabBar = () => {
  return (
    <TabBar>
      {CATEGORY_TAG.map((tag) => {
        return <CategoryItem key={tag} title={tag} />;
      })}
    </TabBar>
  );
};

export default CategoryTabBar;

const TabBar = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLOR.GRAY100};
  @media (max-width: 390px) {
    overflow-x: scroll;
  }
  @media (min-width: 1280px) {
    background-color: red;
    div {
      &:first-child {
        margin: 0 1.25rem 0 0;
      }
      margin: 0 1.25rem;
    }
  }
`;
