import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useMutation, useQuery } from "@apollo/client";

import { createOrder } from "../apollo/domain/payment/payment.mutations";
import { getOrderProductById } from "../apollo/domain/payment/payment.queries";
import {
    COLOR,
    IAMPORT_MERCHANT_CODE,
    IamportPaymentGateInfo,
    PATH,
} from "../constants";
import { ProfileCard } from "../domain/member/components";
import { PaymentCard, TermsOfServiceSection } from "../domain/order/components";
import { Divider } from "../mds";
import { RowBox } from "../mds/box";
import { BasicButton } from "../mds/button";
import { CompanyInfo } from "../mds/layout/mobile";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyL, BodyM, BodyXL, HeadingXL, HeadingXXL } from "../mds/text";
import { isNull } from "../utils/isNull";

const PaymentPage = () => {
    const {
        userId: memberId,
        name = "김상혁",
        email = "tkdgur234@naver.com",
    } = { ...localStorage };
    const { courseId } = useParams();

    const [product, setProduct] = useState({});
    const [orderNumber, setOrderNumber] = useState(null);
    const [sortedSessionList, setSortedSessionList] = useState([]);
    const [payMethod, setPaymentMethod] = useState(null);
    const paymentMethod = IamportPaymentGateInfo.find(
        el => el.name === payMethod
    );

    const { data: getProductByIdOutput } = useQuery(getOrderProductById, {
        variables: { id: courseId },
        onCompleted: data => {
            setProduct(data.getProductById);
            const formattedSession = data.getProductById.sessions
                .slice()
                .sort((a, b) => a.orderBy - b.orderBy);
            setSortedSessionList(formattedSession);
        },
    });

    const [getOrderNumber] = useMutation(createOrder, {
        variables: {
            productId: courseId,
            memberId: memberId,
            creatorId: product?.creator?.id,
        },
        onCompleted: ({ createOrder }) => {
            setOrderNumber(createOrder.orderNumber);
        },
    });

    const fotamttedPrice = price => {
        return Number(price).toLocaleString();
    };

    const handleSelectPaymentMethod = name => {
        setPaymentMethod(name);
    };

    const handlePurchase = async () => {
        const { IMP } = window;
        IMP.init(IAMPORT_MERCHANT_CODE);

        const paymentInfo = {
            pg: paymentMethod.pg,
            pay_method: paymentMethod.pay_method,
            merchant_uid: orderNumber,
            name: product?.title,
            amount: product?.discountPrice,
            buyer_email: email,
            buyer_name: name,
            m_redirect_url: `${window.location.origin}${PATH.PAYMENT_DETAIL}`,
        };
        try {
            await IMP.request_pay(paymentInfo);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <BasicHeader pageDescription={"결제"} />
            <Container>
                <HeadingXL margin={"0.75rem 0"}>도전자</HeadingXL>
                <ProfileCard>
                    <UserInfo>
                        <RowBox justifyContent={"flex-start"}>
                            <BodyM
                                margin={"0 1.813rem 0 0"}
                                fontColor={COLOR.GRAY500}
                            >
                                이름
                            </BodyM>
                            <BodyL>{name}</BodyL>
                        </RowBox>
                        <RowBox>
                            <BodyM
                                margin={"0 1rem 0 0"}
                                fontColor={COLOR.GRAY500}
                            >
                                이메일
                            </BodyM>
                            <BodyL>{email}</BodyL>
                        </RowBox>
                    </UserInfo>
                </ProfileCard>
                <HeadingXL margin={"0.75rem 0"}>도전 클래스</HeadingXL>
                <CourseContainer>
                    <BodyM fontColor={COLOR.GRAY500}>클래스명</BodyM>
                    <BodyL margin={"0.5rem 0 0"}>{product?.title}</BodyL>
                    <Divider margin={"1rem 0"} />
                    <BodyM fontColor={COLOR.GRAY500}>커리큘럼</BodyM>
                    {sortedSessionList?.map(session => {
                        return (
                            <RowBox key={session.orderBy} margin={"0 0 0.5rem"}>
                                <BodyL>{session.title}</BodyL>
                                <TextContainer>
                                    <BodyM>인증기한</BodyM>
                                    <BodyL
                                        margin={"0 0 0 0.25rem"}
                                        fontColor={COLOR.BRAND_COLOR}
                                    >
                                        {session.duration}일
                                    </BodyL>
                                </TextContainer>
                            </RowBox>
                        );
                    })}
                </CourseContainer>
                <HeadingXL margin={"0.75rem 0"}>결제 금액</HeadingXL>
                <PriceContainer>
                    <RowBox>
                        <BodyXL>총 결제 금액</BodyXL>
                        <HeadingXXL fontColor={COLOR.ERROR500}>
                            {fotamttedPrice(product?.discountPrice)}원
                        </HeadingXXL>
                    </RowBox>
                    <Divider margin={"1rem 0"} />
                    <RowBox>
                        <BodyM fontColor={COLOR.GRAY500}>상품 금액</BodyM>
                        <BodyM fontColor={COLOR.GRAY500}>
                            {fotamttedPrice(product?.price)}원
                        </BodyM>
                    </RowBox>
                    <RowBox>
                        <BodyM fontColor={COLOR.GRAY500}> 상품 할인 금액</BodyM>
                        <BodyM fontColor={COLOR.GRAY500}>
                            {fotamttedPrice(
                                product?.discountPrice - product?.price
                            )}
                            원
                        </BodyM>
                    </RowBox>
                </PriceContainer>

                <HeadingXL margin={"0.75rem 0"}>결제 수단</HeadingXL>

                <PaymentCard
                    selectedMethod={payMethod}
                    onClick={handleSelectPaymentMethod}
                />

                <BasicButton
                    isDisabled={isNull(payMethod)}
                    onClick={handlePurchase}
                >
                    <BodyXL fontColor={COLOR.WHITE}>
                        {fotamttedPrice(product?.discountPrice)}원 결제
                    </BodyXL>
                </BasicButton>
                <TermsOfServiceSection />
            </Container>
            <CompanyInfo />
        </>
    );
};
export default PaymentPage;

const TextContainer = styled.div`
    display: flex;
`;
const Container = styled.div`
    padding: 0 1rem;
`;
const CourseContainer = styled.div`
    border-radius: 1.25rem;
    padding: 1rem 1.25rem;
    background-color: ${COLOR.GRAY50};
`;
const PriceContainer = styled.div`
    border-radius: 1.25rem;
    padding: 1rem 1.25rem;
    background-color: ${COLOR.GRAY50};
`;
const UserInfo = styled.div`
    margin-left: 1rem;
`;
