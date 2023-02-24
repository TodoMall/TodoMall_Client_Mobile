import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { useQuery } from "@apollo/client";

import { COLOR, LOCAL_STORAGE_KEYS } from "../constants";
import {
    DeleteSessionPopup,
    PushPopup,
    RetryPopup,
} from "../domain/education/components";
import { TutorialCard } from "../domain/member/components";
import { ClassBox, SessionCard } from "../domain/store/components";
import { useLocalStorage, useToggle } from "../hooks";
import { GlobalNavBar } from "../mds/layout/mobile";
import { MyCourseHeader } from "../mds/layout/mobile/headers";
import { HeadingXL } from "../mds/text";

/* TODO : delete repeated code and demo codes , fetching data from server */
const MyCoursePage = () => {
    const [getMemberAgreeById] = useQuery();

    const [isTuturialDone, setIsTuturialDone] = useLocalStorage(
        LOCAL_STORAGE_KEYS.IS_TUTORIAL_DONE,
        false
    );
    const [userId] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_ID);

    const handleTutorialStatus = () =>
        setIsTuturialDone(prevStatus => !prevStatus);

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
            {/* TODO: banner 클릭 시 페이지 이동 있어야함 */}
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
                <HeadingXL margin={"1.5rem 0 0.75rem 0.5rem"}>
                    내 클래스
                </HeadingXL>
                {isTuturialDone && (
                    <TutorialCard onDelete={handleTutorialStatus} />
                )}
                {/* FIXME : Session 카드마다 마진이 겹쳐지는 현상 발생 */}
                <SessionCard />
                <HeadingXL margin={"1.5rem 0 0.75rem 0.5rem"}>
                    추천 클래스
                </HeadingXL>
            </PageContanier>
            <Swiper
                slidesPerView={2.2}
                spaceBetween={8}
                slidesOffsetBefore={16}
            >
                {array.map(el => {
                    return (
                        <SwiperSlide
                            key={el}
                            style={{
                                width: "100%",
                                minWidth: "8.75rem",
                                maxWidth: "11.625rem",
                            }}
                        >
                            <ClassBox />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

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

const DemoLineBanner = styled.img`
    width: 100%;
    height: 5.25rem;
    object-fit: contain;
    /* object-fit: fill;
    object-fit: cover;
    object-fit: none; */
    content: url("/image/demo_line_banner.png");
`;
