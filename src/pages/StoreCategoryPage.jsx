import styled from "styled-components";

import { ThumbnailBanner } from "../domain/advertisement/components";
import { CategoryClassList } from "../domain/store/components";
import { GlobalNavBar } from "../mds/layout/mobile";
import { StoreHeader } from "../mds/layout/mobile/headers";

const StoreCategoryPage = () => {
    return (
        <Container>
            <StoreHeader />
            <ThumbnailBanner />
            <ClassBoxContainer>
                <CategoryClassList />
            </ClassBoxContainer>
            <GlobalNavBar />
        </Container>
    );
};

export default StoreCategoryPage;

const Container = styled.div`
    width: 100%;
    padding-bottom: 4rem;
`;
const ClassBoxContainer = styled.div`
    padding: 0 1rem;
`;
