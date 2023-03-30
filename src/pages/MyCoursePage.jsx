import { useState } from "react";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getSubscribeProductByMemberId } from "../apollo/domain/member";
import { COLOR, LOCAL_STORAGE_KEYS, PROCESS_STATUS } from "../constants";
import { BandBanner } from "../domain/advertisement/components";
import { PushPopup } from "../domain/education/components";
import { TutorialCard } from "../domain/member/components";
import SearchClassCard from "../domain/member/components/SearchClassCard";
import { PromotionClassSlider } from "../domain/mycourse/components";
import { SessionCardList } from "../domain/mycourse/components";
import { useLocalStorage, usePopup } from "../hooks";
import { GlobalNavBar } from "../mds/layout/mobile";
import { MyCourseHeader } from "../mds/layout/mobile/headers";
import { HeadingXL } from "../mds/text";

const MyCoursePage = () => {
    const { IS_TUTORIAL_DONE, IS_PUSHALARM_AGREE } = LOCAL_STORAGE_KEYS;
    const { memberId } = { ...localStorage };
    const [memberProduct, setMemberProduct] = useState([]);
    const [isTutorialDone, setIsTuturialDone] = useLocalStorage(
        IS_TUTORIAL_DONE,
        false
    );
    const [isAgreePush] = useLocalStorage(IS_PUSHALARM_AGREE, false);

    const [isShowPushAlarmPopup, _, handleClose] = usePopup(!isAgreePush);

    useQuery(getSubscribeProductByMemberId, {
        variables: {
            id: memberId,
        },
        onCompleted: data => {
            // TODO : 불어오는 조건 크로스 체크
            const filteredProducts =
                data.getMemberById.subscribeProducts.filter(
                    ({ status }) =>
                        status === PROCESS_STATUS.PROCESS ||
                        status === PROCESS_STATUS.WAITING ||
                        status === PROCESS_STATUS.FAIL
                );
            setMemberProduct(filteredProducts);
        },
    });

    const handleTutorialDone = () => setIsTuturialDone(false);
    const handleDownloadTutorial = () => setIsTuturialDone(true);

    // TODO : suspense with Skeleton Component
    return (
        <Container>
            <MyCourseHeader />
            <BandBanner />
            <PageContanier>
                <HeadingXL margin={"1.5rem 0 0.75rem 0.5rem"}>
                    내 클래스
                </HeadingXL>
                {!isTutorialDone && (
                    <TutorialCard
                        onDownload={handleDownloadTutorial}
                        onDelete={handleTutorialDone}
                    />
                )}
                {isTutorialDone && memberProduct?.length === 0 && (
                    <SearchClassCard />
                )}

                {isTutorialDone &&
                    memberProduct?.map(subscribeProduct => {
                        return (
                            <SessionCardList
                                key={subscribeProduct?.id}
                                subscribeProduct={subscribeProduct}
                            />
                        );
                    })}
            </PageContanier>
            <PromotionClassSlider />
            <GlobalNavBar />
            {isShowPushAlarmPopup && <PushPopup onClose={handleClose} />}
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
