import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { useQuery } from "@apollo/client";

import { getAllPromotion } from "../../../apollo/domain/mycourse";
import { HeadingXL } from "../../../mds/text";
import { ClassBox } from "../../store/components";

/* TODO : title 이 promotion 의 title 을 사용하는지 product 의 title을 사용하는지 확인하기 */

const PromotionClassSlider = () => {
    const { data: promotions } = useQuery(getAllPromotion);

    return (
        <Container>
            <HeadingXL margin={"1.5rem 0 0.75rem 0.5rem"}>
                추천 클래스
            </HeadingXL>
            <Swiper
                slidesPerView={2.2}
                spaceBetween={8}
                slidesOffsetBefore={16}
            >
                {promotions?.getAllPromotion?.map(promotion => {
                    return (
                        <SwiperSlide
                            key={promotion.id}
                            style={{
                                width: "100%",
                                minWidth: "8.75rem",
                                maxWidth: "11.625rem",
                            }}
                        >
                            <ClassBox
                                courseId={promotion.products.id}
                                title={promotion.title}
                                subDescription={
                                    promotion.products.subDescription
                                }
                                thumbnailUrl={promotion.products.thumbnailUrl}
                                discountPrice={promotion.products.discountPrice}
                                discountPercent={
                                    promotion.products.discountPercent
                                }
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};

export default PromotionClassSlider;

const Container = styled.div``;
