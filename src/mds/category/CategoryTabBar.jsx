import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CATEGORY_TAG } from "../../constants";
import { useQueryString } from "../../hooks";
import { isNull } from "../../utils/isNull";
import CategoryItem from "./CategoryItem";

const CategoryTabBar = ({ onClick: handleClick }) => {
    const navigate = useNavigate();
    const [selectedCategory] = useQueryString("tag");

    const handleCategoryPage = tag => {
        if (tag !== CATEGORY_TAG.BEST) {
            handleClick(tag);
            navigate({
                pathname: "/store/category",
                search: `tag=${CATEGORY_TAG[tag]}`,
            });
        }

        if (tag === CATEGORY_TAG.BEST) {
            handleClick(CATEGORY_TAG.BEST);
            navigate("/store");
        }
    };
    return (
        <TabBar>
            {Object.entries(CATEGORY_TAG).map(tag => {
                const [key, value] = tag;
                const formattedSelecttion = isNull(selectedCategory)
                    ? CATEGORY_TAG.BEST
                    : selectedCategory;
                return (
                    <CategoryItem
                        key={key}
                        title={key}
                        isSelected={formattedSelecttion === value}
                        onClick={() => handleCategoryPage(key)}
                    />
                );
            })}
        </TabBar>
    );
};

export default CategoryTabBar;

const TabBar = styled.div`
    display: flex;
    overflow-x: scroll;
`;
