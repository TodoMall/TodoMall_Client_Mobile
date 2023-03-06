import styled from "styled-components";
import "swiper/css";

import { useQuery } from "@apollo/client";

import { getSubscribeProductByMemberId } from "../apollo/domain/member";
import { COLOR, LOCAL_STORAGE_KEYS } from "../constants";
import { PushPopup } from "../domain/education/components";
import { TutorialCard } from "../domain/member/components";
import { PromotionClassSlider } from "../domain/mycourse/components";
import { SessionCardList } from "../domain/mycourse/components";
import { useLocalStorage, usePopup } from "../hooks";
import { GlobalNavBar } from "../mds/layout/mobile";
import { MyCourseHeader } from "../mds/layout/mobile/headers";
import { HeadingXL } from "../mds/text";

const MyCoursePage = () => {
    const { IS_TUTORIAL_DONE, IS_PUSHALARM_AGREE } = LOCAL_STORAGE_KEYS;

    const { data: SubscribeProduct } = useQuery(getSubscribeProductByMemberId);

    const [isTuturialDone, setIsTuturialDone] = useLocalStorage(
        IS_TUTORIAL_DONE,
        true
    );

    const handleTutorialStatus = () => setIsTuturialDone(prev => !prev);

    const [isPushAlarm] = useLocalStorage(IS_PUSHALARM_AGREE);

    // TODO : agreement 페이지에서 설정 필요
    const [isShowPushAlarmPopup, _, handleClosePushAlarmPopup] = usePopup(
        !isPushAlarm
    );

    return (
        <Container>
            <MyCourseHeader />
            <DemoBandBanner />
            <PageContanier>
                <HeadingXL margin={"1.5rem 0 0.75rem 0.5rem"}>
                    내 클래스
                </HeadingXL>
                {isTuturialDone && (
                    <TutorialCard onDelete={handleTutorialStatus} />
                )}
                {SubscribeProduct?.getMemberById[0].subscribeProducts.map(
                    subscribeProduct => {
                        return (
                            <SessionCardList
                                key={subscribeProduct.id}
                                courseId={subscribeProduct.id}
                                retryCount={subscribeProduct.retryCount}
                                sessions={subscribeProduct.sessions}
                            />
                        );
                    }
                )}
            </PageContanier>
            <PromotionClassSlider />
            <GlobalNavBar />
            {isShowPushAlarmPopup && (
                <PushPopup onClose={handleClosePushAlarmPopup} />
            )}
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

const DemoBandBanner = styled.img`
    width: 100%;
    height: 5.25rem;
    object-fit: contain;
    content: url("/image/demo_line_banner.png");
`;
