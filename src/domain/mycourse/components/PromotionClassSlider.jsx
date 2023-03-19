import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { useQuery } from "@apollo/client";

import { getPromotionByType } from "../../../apollo/domain/store";
import { PROMOTION_TYPE } from "../../../constants";
import { HeadingXL } from "../../../mds/text";
import { ClassBox } from "../../store/components";

const PromotionClassSlider = () => {
    const [recommendProduct, setRecommendProduct] = useState();

    const { data } = useQuery(getPromotionByType, {
        variables: {
            type: PROMOTION_TYPE.MYCOURSE_00,
        },
        onCompleted: data => {
            setRecommendProduct(data.getPromotionByType);
        },
    });

    return (
        <>
            <HeadingXL margin={"1.5rem 0 0.75rem 1.5rem"}>
                추천 클래스
            </HeadingXL>
            <Swiper
                slidesPerView={2.2}
                spaceBetween={8}
                slidesOffsetBefore={16}
            >
                {recommendProduct?.products?.map(promotion => {
                    return (
                        <SwiperSlide
                            key={promotion?.id}
                            style={{
                                width: "100%",
                                minWidth: "8.75rem",
                                maxWidth: "11.625rem",
                            }}
                        >
                            <ClassBox
                                courseId={promotion?.id}
                                title={promotion?.title}
                                subDescription={promotion?.subDescription}
                                thumbnailUrl={promotion?.thumbnailUrl}
                                discountPrice={promotion?.discountPrice}
                                discountPercent={promotion?.discountPercent}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default PromotionClassSlider;
