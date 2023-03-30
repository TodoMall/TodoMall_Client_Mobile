import styled from "styled-components";

import { useMutation } from "@apollo/client";

import { retryProduct } from "../../../../apollo/domain/mycourse/mycourse.mutation";
import { COLOR } from "../../../../constants";
import { usePopup } from "../../../../hooks";
import { Card } from "../../../../mds";
import { RowBox } from "../../../../mds/box";
import { BasicButton } from "../../../../mds/button";
import { WarningIcon } from "../../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../../mds/text";
import { RetryPopup } from "../../../education/components";

const RetryCard = ({ subscribeProductId, title, missionTitle }) => {
    const { USER_ID } = { ...localStorage };
    const [isShowDeleteSessionPopup, handleOpenPopup, handleClosePopup] =
        usePopup(false);

    const [retryProductFn] = useMutation(retryProduct, {
        variables: {
            memberId: "56167553-ab6f-4d8f-8c81-f402988e9be1",
            subscribeProductId: subscribeProductId,
        },
    });
    const handleRetrySession = () => {
        retryProductFn();
    };

    const handleDeleteSession = () => {
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
                    <BasicButton
                        width={"50%"}
                        margin={"0 0.5rem 0 0"}
                        backgroundColor={COLOR.GRAY100}
                        onClick={handleDeleteSession}
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
