import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getProductByType } from "../../../apollo/domain/store/store.queries";
import { CATEGORY_TAG } from "../../../constants";
import { useQueryString } from "../../../hooks";
import { HeadingXL } from "../../../mds/text";
import { ThumbnailBanner } from "../../advertisement/components";
import ClassBox from "./ClassBox";

const CategoryClassList = () => {
    const currentCategory = useQueryString("tag");

    const { data: products } = useQuery(getProductByType, {
        variables: { type: currentCategory },
    });

    const [foramttedType] = Object.entries(CATEGORY_TAG).find(
        ([_, val]) => val === currentCategory
    );

    return (
        <Container>
            <ThumbnailBanner pathTitle={currentCategory} />
            <HeadingXL margin={"2rem 0.5rem 0.75rem 0.5rem"}>
                {foramttedType}
            </HeadingXL>
            <ClassContainer>
                {products?.getProductByType.map(product => {
                    return (
                        <ClassBox
                            key={product?.id}
                            courseId={product?.id}
                            thumbnailUrl={product?.thumbnailUrl}
                            title={product?.title}
                            subDescription={product?.subDescription}
                            discountPrice={product?.discountPrice}
                            discountPercent={product?.discountPercent}
                        />
                    );
                })}
            </ClassContainer>
        </Container>
    );
};
export default CategoryClassList;
const Container = styled.div``;

const ClassContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.5rem;
    div {
        flex: 0 0 48.8%;
    }
`;