import styled from "styled-components";

import { CATEGORY_TAG, COLOR } from "../../constants";
import CategoryItem from "./CategoryItem";

const CategoryTabBar = () => {
    return (
        <TabBar>
            {CATEGORY_TAG.map(tag => {
                return <CategoryItem key={tag} title={tag} />;
            })}
        </TabBar>
    );
};

export default CategoryTabBar;

const TabBar = styled.div`
    display: flex;
    border-bottom: 1px solid ${COLOR.GRAY100};
`;
