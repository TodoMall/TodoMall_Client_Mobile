import styled from "styled-components";
import "swiper/css";

import { COLOR, LOCAL_STORAGE_KEYS } from "../constants";
import {
    DeleteSessionPopup,
    PushPopup,
    RetryPopup,
} from "../domain/education/components";
import { TutorialCard } from "../domain/member/components";
import { PromotionClassSlider } from "../domain/mycourse/components";
import { SessionCard } from "../domain/store/components";
import { useLocalStorage, useToggle } from "../hooks";
import { GlobalNavBar } from "../mds/layout/mobile";
import { MyCourseHeader } from "../mds/layout/mobile/headers";
import { HeadingXL } from "../mds/text";

const MyCoursePage = () => {
    const [isTuturialDone, setIsTuturialDone] = useLocalStorage(
        LOCAL_STORAGE_KEYS.IS_TUTORIAL_DONE,
        false
    );
    const handleTutorialStatus = () =>
        setIsTuturialDone(prevStatus => !prevStatus);

    const [isPushAlarm] = useLocalStorage(LOCAL_STORAGE_KEYS.isPushAlarmAgree);
    const [isShowPushAlarmPopup, setIsShowPushAlarmPopup] = useToggle(
        !isPushAlarm
    );
    const handleClosePushAlarmPopup = () => setIsShowPushAlarmPopup(false);

    const [isShowDeleteSessionPopup, setIsShowDeleteSessionPopup] =
        useToggle(false);
    const handleCloseDeleteSessionPopup = () =>
        setIsShowDeleteSessionPopup(false);

    const [isShowRetrySessionPopup, setIsShowRetrySessionPopup] =
        useToggle(false);
    const handleCloseRetrySessionPopup = () =>
        setIsShowRetrySessionPopup(false);

    return (
        <Container>
            <MyCourseHeader />
            {/* TODO: banner 클릭 시 페이지 이동 있어야함 */}
            <DemoLineBanner />
            {isShowPushAlarmPopup && (
                <PushPopup onClose={handleClosePushAlarmPopup} />
            )}
            {isShowDeleteSessionPopup && (
                <DeleteSessionPopup onClose={handleCloseDeleteSessionPopup} />
            )}
            {isShowRetrySessionPopup && (
                <RetryPopup onClose={handleCloseRetrySessionPopup} />
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
                <PromotionClassSlider />
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

const DemoLineBanner = styled.img`
    width: 100%;
    height: 5.25rem;
    object-fit: contain;
    content: url("/image/demo_line_banner.png");
`;
