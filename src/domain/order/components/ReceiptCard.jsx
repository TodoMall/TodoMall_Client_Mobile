import styled from "styled-components";

import { COLOR } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { BodyL, BodyM, BodyXL } from "../../../mds/text";

const ReceiptCard = ({ paymentInfo }) => {
    const { GRAY500, ERROR500, GRAY900 } = COLOR;
    return (
        <Container>
            <RowBox margin={"0 0 1rem"}>
                <BodyM fontColor={GRAY500}>결제 금액</BodyM>
                <BodyXL fontColor={ERROR500}>
                    {Number(
                        paymentInfo?.product?.discountPrice
                    ).toLocaleString()}
                    원
                </BodyXL>
            </RowBox>
            <RowBox margin={"0 0 1rem"}>
                <BodyM fontColor={GRAY500}>사용자</BodyM>
                <BodyL fontColor={GRAY900}>{paymentInfo?.member?.name}</BodyL>
            </RowBox>
            <RowBox margin={"0 0 1rem"}>
                <BodyM fontColor={GRAY500}>결제카드</BodyM>
                <BodyL fontColor={GRAY900}>{paymentInfo?.pgProvider}</BodyL>
            </RowBox>
            <RowBox>
                <BodyM fontColor={GRAY500}>결제일시</BodyM>
                <BodyL fontColor={GRAY900}>2022.12.02 14:30:32</BodyL>
            </RowBox>
        </Container>
    );
};
export default ReceiptCard;

const Container = styled.div`
    margin: 2rem 0;
    padding: 1rem 1.25rem;
    border-radius: 1rem;
    background-color: ${COLOR.GRAY50};
`;
