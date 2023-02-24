import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { COLOR, FONT_STYLE } from "../constants";
import {
    DeleteSessionPopup,
    PushPopup,
    RetryPopup,
} from "../domain/education/components";
import { TutorialCard } from "../domain/member/components";
import { ClassBox, SessionCard } from "../domain/store/components";
import { useToggle } from "../hooks";
import { GlobalNavBar } from "../mds/layout/mobile";
import { MyCourseHeader } from "../mds/layout/mobile/headers";
import { HeadingXL } from "../mds/text";

/* TODO : delete repeated code and demo codes , fetching data from server */
const MyCoursePage = () => {
    const { isGuest } = { ...localStorage }; // FIXME :  will be replaced by using hooks.
    const [isShowPushAlarmPopup, _, handlePushAlarmPopup] = useToggle(false);
    const [isShowDeleteSessionPopup, __, handleDeleteSessionPopup] =
        useToggle(false);
    const [isShowRetrySessionPopup, ___, handleRetrySessionPopup] =
        useToggle(false);

    const handlePushAlarmStatus = () => {
        //  code ...
    };
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Container>
            <MyCourseHeader />
            <DemoLineBanner />
            {isShowPushAlarmPopup && (
                <PushPopup onClose={handlePushAlarmPopup} />
            )}
            {isShowDeleteSessionPopup && (
                <DeleteSessionPopup onClose={handleDeleteSessionPopup} />
            )}
            {isShowRetrySessionPopup && (
                <RetryPopup onClose={handleRetrySessionPopup} />
            )}
            <PageContanier>
                <HeadingXL margin={"1.5rem 0 0.75rem 0"}>내 클래스</HeadingXL>
                <TutorialCard />
                <SessionCard />
                <HeadingXL margin={"2rem 0 0.75rem 0"}>추천 클래스</HeadingXL>
                <Swiper slidesPerView={2.1} spaceBetween={8}>
                    {array.map(el => {
                        return (
                            <SwiperSlide
                                key={el}
                                style={{
                                    minWidth: "8.75rem",
                                    maxWidth: "11.625rem",
                                }}
                            >
                                <ClassBox />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </PageContanier>
            <GlobalNavBar />
        </Container>
    );
};

export default MyCoursePage;

const Container = styled.div`
    padding-bottom: 4rem;
    background-color: ${COLOR.WHITE};
`;

const PageContanier = styled.div`
    padding: 0 1rem;
`;

const Button = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 3.25rem;
    color: ${props => props.fontColor};
    font-weight: ${FONT_STYLE.PRETENDARD_125.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_125.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_125.HEIGHT};
`;

const DemoLineBanner = styled.img`
    width: 100%;
    height: 5.25rem;
    object-fit: contain;
    /* object-fit: fill;
    object-fit: cover;
    object-fit: none; */
    content: url("/image/demo_line_banner.png");
`;
