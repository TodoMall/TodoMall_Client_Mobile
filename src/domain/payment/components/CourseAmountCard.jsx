import styled from "styled-components";

import { COLOR } from "../../../constants";
import { Divider } from "../../../mds";
import { RowBox } from "../../../mds/box";
import { BodyM, BodyXL, HeadingXXL } from "../../../mds/text";

const CourseAmountCard = ({ price, discountPrice }) => {
    const fotamttedPrice = price => {
        return Number(price).toLocaleString();
    };

    return (
        <Container>
            <PriceContainer>
                <RowBox>
                    <BodyXL>총 결제 금액</BodyXL>
                    <HeadingXXL fontColor={COLOR.ERROR500}>
                        {fotamttedPrice(discountPrice)}원
                    </HeadingXXL>
                </RowBox>
                <Divider margin={"1rem 0"} />
                <RowBox>
                    <BodyM fontColor={COLOR.GRAY500}>상품 금액</BodyM>
                    <BodyM fontColor={COLOR.GRAY500}>
                        {fotamttedPrice(price)}원
                    </BodyM>
                </RowBox>
                <RowBox>
                    <BodyM fontColor={COLOR.GRAY500}> 상품 할인 금액</BodyM>
                    <BodyM fontColor={COLOR.GRAY500}>
                        {fotamttedPrice(discountPrice - price)}원
                    </BodyM>
                </RowBox>
            </PriceContainer>
        </Container>
    );
};

export default CourseAmountCard;

const Container = styled.div``;

const PriceContainer = styled.div`
    border-radius: 1.25rem;
    padding: 1rem 1.25rem;
    background-color: ${COLOR.GRAY50};
`;
