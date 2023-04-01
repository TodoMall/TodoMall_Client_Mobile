import styled from "styled-components";

import { useMutation } from "@apollo/client";

import { deleteSubscribeProduct } from "../../../../apollo/domain/mycourse/mycourse.mutation";
import { COLOR } from "../../../../constants";
import { usePopup } from "../../../../hooks";
import { Card } from "../../../../mds";
import { RowBox } from "../../../../mds/box";
import { BasicButton } from "../../../../mds/button";
import { FailIcon } from "../../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../../mds/text";
import { DeleteSessionPopup } from "../../../education/components";

const FailCard = ({ subscribeProductId, title, missionTitle }) => {
    const [isShowDeleteSessionPopup, handleOpenPopup, handleClosePopup] =
        usePopup(false);

    const [deleteSubscribeProductFn] = useMutation(deleteSubscribeProduct, {
        variables: {
            memberId: "56167553-ab6f-4d8f-8c81-f402988e9be1",
            subscribeProductId: subscribeProductId,
        },
    });

    return (
        <>
            <Card backgroundColor={COLOR.GRAY50}>
                <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                    <FailIcon />
                    <BodyL fontColor={COLOR.ERROR500} margin={"0 0 0 0.25rem"}>
                        인증기한 마감
                    </BodyL>
                </RowBox>
                <TextContainer>
                    <HeadingXL>{title}</HeadingXL>
                    <BodyM>{missionTitle}</BodyM>
                </TextContainer>
                <RowBox justifyContent={"flex-end"}>
                    <BasicButton
                        width={"auto"}
                        margin={"0.5rem 0 0 0"}
                        backgroundColor={COLOR.ERROR500}
                        onClick={handleOpenPopup}
                    >
                        <BodyXL fontColor={COLOR.WHITE}>도전 삭제</BodyXL>
                    </BasicButton>
                </RowBox>
            </Card>

            {isShowDeleteSessionPopup && (
                <DeleteSessionPopup
                    onDelete={deleteSubscribeProductFn}
                    onClose={handleClosePopup}
                />
            )}
        </>
    );
};
export default FailCard;

const TextContainer = styled.div`
    margin: 0.25rem 0 0.5rem 0;
    width: 100%;
`;
