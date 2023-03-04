import styled from "styled-components";

import CategoryClassList from "../domain/store/components/CategoryClassList";
import { GlobalNavBar } from "../mds/layout/mobile";
import { StoreHeader } from "../mds/layout/mobile/headers";

const StoreCategoryPage = () => {
    return (
        <Container>
            <StoreHeader />
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
