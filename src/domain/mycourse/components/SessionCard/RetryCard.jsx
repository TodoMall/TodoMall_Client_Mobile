import styled from "styled-components";

import { useMutation } from "@apollo/client";

import { retryProduct } from "../../../../apollo/domain/mycourse/mycourse.mutation";
import { COLOR, LOCAL_STORAGE_KEYS } from "../../../../constants";
import { usePopup } from "../../../../hooks";
import { Card } from "../../../../mds";
import { RowBox } from "../../../../mds/box";
import { BasicButton } from "../../../../mds/button";
import { WarningIcon } from "../../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../../mds/text";
import { RetryPopup } from "../../../education/components";

const RetryCard = ({
    subscribeProductId,
    title,
    missionTitle,
    onRefetch: handleRefetch = () => {},
}) => {
    const [userId] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_ID);
    const [isShowDeleteSessionPopup, handleOpenPopup, handleClosePopup] =
        usePopup(false);

    const [retryProductFn] = useMutation(retryProduct, {
        variables: {
            memberId: userId,
            subscribeProductId: subscribeProductId,
        },
    });
    const handleRetrySession = async () => {
        await retryProductFn();
        handleRefetch();
    };

    const handleHideSession = () => {
        handleOpenPopup();
        // TODO : delete logic
    };

    return (
        <>
            <Card backgroundColor={COLOR.GRAY50}>
                <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                    <WarningIcon />
                    <BodyL fontColor={COLOR.ERROR500} margin={"0 0 0 0.25rem"}>
                        인증기한 마감
                    </BodyL>
                </RowBox>
                <TextContainer>
                    <HeadingXL>{title}</HeadingXL>
                    <BodyM>{missionTitle}</BodyM>
                </TextContainer>
                <RowBox>
                    {/* TODO : 나중에 도전 기능 구현  */}
                    <BasicButton
                        width={"50%"}
                        margin={"0 0.5rem 0 0"}
                        backgroundColor={COLOR.GRAY100}
                        onClick={handleHideSession}
                    >
                        <BodyL fontColor={COLOR.GRAY400}>나중에 도전</BodyL>
                    </BasicButton>
                    <BasicButton
                        width={"50%"}
                        margin={"0.5rem 0 0 0"}
                        backgroundColor={COLOR.ERROR500}
                        onClick={handleRetrySession}
                    >
                        <BodyXL fontColor={COLOR.WHITE}>다시 도전</BodyXL>
                    </BasicButton>
                </RowBox>
            </Card>
            {isShowDeleteSessionPopup && (
                <RetryPopup onClose={handleClosePopup} />
            )}
        </>
    );
};
export default RetryCard;

const TextContainer = styled.div`
    margin: 0.25rem 0 0.5rem 0;
    width: 100%;
`;
