import styled from "styled-components";

import { COLOR } from "../../../../constants";
import { usePopup } from "../../../../hooks";
import { Card } from "../../../../mds";
import { RowBox } from "../../../../mds/box";
import { BasicButton } from "../../../../mds/button";
import { WarningIcon } from "../../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../../mds/text";
import { RetryPopup } from "../../../education/components";

const RetryCard = ({ title, missionTitle }) => {
    const [isShowDeleteSessionPopup, handleOpenPopup, handleClosePopup] =
        usePopup(false);

    const handleDeleteSubscribeSession = () => {
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
                        onClick={handleDeleteSubscribeSession}
                    >
                        <BodyL fontColor={COLOR.GRAY400}>나중에 도전</BodyL>
                    </BasicButton>
                    <BasicButton
                        width={"50%"}
                        margin={"0.5rem 0 0 0"}
                        backgroundColor={COLOR.ERROR500}
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
