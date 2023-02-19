import { CATEGORY_TAG, COLOR } from "../../constants";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const CategoryTabBar = () => {
  return (
    <TabBar>
      {CATEGORY_TAG.map((tag) => {
        return <CategoryItem isMobile={isMobile} key={tag} title={tag} />;
      })}
    </TabBar>
  );
};

export default CategoryTabBar;

const TabBar = styled.div`
  display: flex;
  border-bottom: 1px solid ${isMobile ? COLOR.GRAY100 : "none"};
`;
