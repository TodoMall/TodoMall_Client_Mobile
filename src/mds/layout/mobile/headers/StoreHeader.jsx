import { useState } from "react";
import styled from "styled-components";

import { COLOR } from "../../../../constants";
import { useQueryString } from "../../../../hooks";
import { RowBox } from "../../../box";
import { CategoryTabBar } from "../../../category";
import { BrandLogo } from "../../../icon";

const StoreHeader = () => {
    const [currentCategory] = useQueryString("tag");

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
                    <BrandLogo
                        logoColor={COLOR.GRAY800}
                        width={105}
                        height={20}
                    />
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
