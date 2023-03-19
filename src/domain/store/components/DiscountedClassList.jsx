import { useState } from "react";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getPromotionByType } from "../../../apollo/domain/store";
import { PROMOTION_TYPE } from "../../../constants";
import { HeadingXL } from "../../../mds/text";
import ClassBox from "./ClassBox";

const DiscountedClassList = () => {
    const [promotionClass, setPromotionClass] = useState({});

    const { data } = useQuery(getPromotionByType, {
        variables: {
            type: PROMOTION_TYPE.STOREMAIN_01,
        },
        onCompleted: data => {
            setPromotionClass(data.getPromotionByType);
        },
    });

    return (
        <Container>
            <HeadingXL margin={"2rem 0.5rem 0.75rem 0.5rem"}>
                {promotionClass?.title}
            </HeadingXL>
            <ClassContainer>
                {promotionClass?.products?.map((product, idx) => {
                    return (
                        <ClassBox
                            key={idx}
                            courseId={product?.id}
                            title={product?.title}
                            subDescription={product?.subDescription}
                            thumbnailUrl={product?.thumbnailUrl}
                            discountPrice={product?.discountPrice}
                            discountPercent={product?.discountPercent}
                        />
                    );
                })}
            </ClassContainer>
        </Container>
    );
};
export default DiscountedClassList;

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
