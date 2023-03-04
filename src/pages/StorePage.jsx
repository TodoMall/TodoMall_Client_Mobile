import styled from "styled-components";

import { SlideBanner } from "../domain/advertisement/components";
import {
    DiscountedClassList,
    RecommendCardList,
    RecommendCategoryClassList,
} from "../domain/store/components";
import { GlobalNavBar } from "../mds/layout/mobile";
import { StoreHeader } from "../mds/layout/mobile/headers";

const StorePage = () => {
    return (
        <>
            <StoreHeader />
            <Container>
                <SlideBanner />
                <RecommendCardList />
                <ClassBoxContainer>
                    <DiscountedClassList />
                    <RecommendCategoryClassList />
                </ClassBoxContainer>
                <GlobalNavBar />
            </Container>
        </>
    );
};

export default StorePage;

const Container = styled.div`
    width: 100%;
    padding-bottom: 4rem;
`;
const ClassBoxContainer = styled.div`
    padding: 0 1rem;
`;
