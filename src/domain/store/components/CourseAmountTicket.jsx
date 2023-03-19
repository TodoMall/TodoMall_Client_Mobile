import styled from "styled-components";

import { COLOR } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { BasicButton } from "../../../mds/button";
import { BodyS, BodyXS, BodyXXXL, DetailXS } from "../../../mds/text";

const CourseAmountTicket = ({
    title,
    description,
    price,
    discountPrice,
    discountPercent,
    onPay: handlePaymentPage = () => {},
}) => {
    return (
        <Container>
            <CourseDescriptionBox>
                <BodyXXXL margin={"0 0 0.5rem"}>{title}</BodyXXXL>
                <BodyXS fontColor={COLOR.GRAY700}>{description}</BodyXS>
            </CourseDescriptionBox>

            <RowBox>
                <Circle radius={"0 0.75rem 0.75rem 0"} />
                <DashedDivider />
                <Circle radius={"0.75rem 0 0 0.75rem"} />
            </RowBox>

            <AmountContainer>
                <RowBox>
                    <Box>
                        <DetailXS>이벤트</DetailXS>
                        <BodyXXXL fontColor={COLOR.BRAND_COLOR}>
                            {discountPercent === 0
                                ? "-"
                                : `${discountPercent}% 할인`}
                        </BodyXXXL>
                    </Box>
                    <Box>
                        <LineThroughText>
                            판매가 {discountPercent === 0 ? null : `${price}원`}
                        </LineThroughText>

                        <BodyXXXL fontColor={COLOR.ERROR500}>
                            {discountPercent === 0 ? price : discountPrice}원
                        </BodyXXXL>
                    </Box>
                </RowBox>
                <BasicButton onClick={handlePaymentPage}>
                    <BodyS fontColor={COLOR.WHITE}>클래스 도전하기</BodyS>
                </BasicButton>
            </AmountContainer>
        </Container>
    );
};

export default CourseAmountTicket;

const Container = styled.div`
    background-color: ${COLOR.GRAY50};
    border-radius: 1.25rem;
`;

const AmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
`;

const CourseDescriptionBox = styled.div`
    padding: 1rem 1.25rem;
`;

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Circle = styled.div`
    width: 0.75rem;
    height: 1.5rem;
    background: ${COLOR.WHITE};
    border-radius: ${props => props.radius};
    z-index: 1;
`;

const DashedDivider = styled.div`
    width: 100%;
    height: 1px;
    margin: 0.5rem 2rem;
    border: 1px dashed ${COLOR.GRAY200};
`;

const LineThroughText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
    text-decoration: line-through;
`;
