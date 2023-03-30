import styled from "styled-components";

import { COLOR } from "../../../constants";
import { ColBox, RowBox } from "../../../mds/box";
import { BasicButton } from "../../../mds/button";
import { BodyL, BodyS, HeadingXL } from "../../../mds/text";

const StickyPayBox = ({
    isVisible,
    price,
    discountPrice,
    discountPercent,
    isFree,
    isDiscount,
    onPay: handlePayment,
}) => {
    return (
        <Container isVisible={isVisible}>
            {!isFree && (
                <RowBox
                    justifyContent={isDiscount ? "space-between" : "flex-end"}
                >
                    {isDiscount && (
                        <RowBox justifyContent={"flex-start"}>
                            <BodyL fontColor={COLOR.BRAND_COLOR}>이벤트</BodyL>
                            <BodyL>&nbsp; {discountPercent}%할인</BodyL>
                        </RowBox>
                    )}
                    <ColBox>
                        {isDiscount && (
                            <LineThroughText fontColor={COLOR.GRAY500}>
                                {price.toLocaleString()}원
                            </LineThroughText>
                        )}
                        <RowBox>
                            <HeadingXL fontColor={COLOR.ERROR500}>
                                {isDiscount
                                    ? discountPrice?.toLocaleString()
                                    : price?.toLocaleString()}
                            </HeadingXL>
                            <BodyL fontColor={COLOR.ERROR500}>원</BodyL>
                        </RowBox>
                    </ColBox>
                </RowBox>
            )}
            <BasicButton margin={"0.75rem 0 0"} onClick={handlePayment}>
                <BodyS fontColor={COLOR.WHITE}>
                    {isFree ? "무료로" : "클래스"} 도전하기
                </BodyS>
            </BasicButton>
        </Container>
    );
};

export default StickyPayBox;

const Container = styled.div`
    width: 100%;
    display: ${props => (props.isVisible ? "block" : "none")};
    position: fixed;
    bottom: 0;
    padding: 1.5rem 1rem 0.5rem 1rem;
    background-color: ${COLOR.GRAY50};
`;

const LineThroughText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
    text-decoration: line-through;
    text-align: right;
`;
