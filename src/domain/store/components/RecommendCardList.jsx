import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { useQuery } from "@apollo/client";

import { getPromotionByType } from "../../../apollo/domain/store/store.queries";
import { PROMOTION_TYPE } from "../../../constants";
import { HeadingXL } from "../../../mds/text";
import RecommendCard from "./RecommendCard";

const RecommendCardList = () => {
    const [recommendClass, setRecommendClass] = useState({});

    const { data } = useQuery(getPromotionByType, {
        variables: {
            type: PROMOTION_TYPE.STOREMAIN_00,
        },
        onCompleted: data => {
            setRecommendClass(data.getPromotionByType);
        },
    });
    const [test] = recommendClass.products || "Asd";

    return (
        <Container>
            <HeadingXL margin={"2rem 0.5rem 0.75rem 1.5rem"}>
                {recommendClass?.title}
            </HeadingXL>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={8}
                slidesOffsetBefore={16}
            >
                {recommendClass?.products?.map(product => {
                    return (
                        <SwiperSlide key={product?.id}>
                            <RecommendCard
                                title={product?.title}
                                subDescription={product?.subDescription}
                                level={product?.level}
                                sessions={product?.sessions}
                                thumbnailUrl={product?.thumbnailUrl}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};
export default RecommendCardList;
const Container = styled.div``;
