import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { useQueryString } from "../../../../hooks";
import { RowBox } from "../../../box";
import { LogoButton } from "../../../button";
import { CategoryTabBar } from "../../../category";

const StoreHeader = () => {
    const currentCategory = useQueryString("tag");

    const [_, setSelectedCategory] = useState(currentCategory);

    const handleCategorySelection = category => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Container>
                <RowBox
                    padding={"0.625rem 1rem"}
                    justifyContent={"space-between"}
                >
                    <LogoButton />
                </RowBox>
                <CategoryTabBar onClick={handleCategorySelection} />
            </Container>
        </>
    );
};
export default StoreHeader;
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
