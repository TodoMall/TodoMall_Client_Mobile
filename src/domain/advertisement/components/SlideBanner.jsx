import styled from "styled-components";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { COLOR } from "../../../constants";
import { BodyXXS } from "../../../mds/text";

const SlideBanner = () => {
    SwiperCore.use(Autoplay);

    // TODO : 데이터 확정 시 데모 데이터 삭제
    const slideImgList = [
        "/image/demo_slideBanner_img.png",
        "/image/demo_slideBanner_img.png",
        "/image/demo_slideBanner_img.png",
        "/image/demo_slideBanner_img.png",
        "/image/demo_slideBanner_img.png",
        "/image/demo_slideBanner_img.png",
    ];
    return (
        <Container>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                speed={2000}
            >
                {slideImgList.map((slide, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <img width={"100%"} src={slide} alt="slideImg" />
                            <Chip>
                                <BodyXXS fontColor={"#41A5FF"}>
                                    {idx + 1}
                                </BodyXXS>
                                <BodyXXS
                                    margin={"0 0.25rem"}
                                    fontColor={COLOR.WHITE}
                                >
                                    /
                                </BodyXXS>
                                <BodyXXS fontColor={COLOR.WHITE}>
                                    {slideImgList.length}
                                </BodyXXS>
                            </Chip>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};

export default SlideBanner;

const Container = styled.div`
    width: 100%;
`;
const Chip = styled.div`
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.438rem;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1.25rem;
    z-index: 1;
`;
