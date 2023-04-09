import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useMutation, useQuery } from "@apollo/client";

import { getOrderProductById } from "../apollo/domain/payment";
import { createOrder } from "../apollo/domain/payment/payment.mutations";
import {
    COLOR,
    IAMPORT_MERCHANT_CODE,
    IamportPaymentGateInfo,
} from "../constants";
import { PaymentCard, TermsOfServiceSection } from "../domain/order/components";
import {
    CourseAmountCard,
    CourseIntroCard,
    PayerInfo,
} from "../domain/payment/components";
import { BasicButton } from "../mds/button";
import { CompanyInfo } from "../mds/layout/mobile";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyXL, HeadingXL } from "../mds/text";
import { isNull } from "../utils/isNull";

const PaymentPage = () => {
    const { USER_ID, USER_NAME, USER_EMAIL } = { LOCAL_STORAGE_KEYS };
    const [userId] = useLocalStorage(USER_ID);
    const [userName] = useLocalStorage(USER_NAME);
    const [userEmail] = useLocalStorage(USER_EMAIL);

    const { courseId } = useParams();

    const [product, setProduct] = useState({});
    const [orderNumber, setOrderNumber] = useState(null);
    const [sortedSessionList, setSortedSessionList] = useState([]);
    const [payMethod, setPaymentMethod] = useState(null);
    const paymentMethod = IamportPaymentGateInfo.find(
        el => el.name === payMethod
    );

    const fotamttedPrice = price => {
        return Number(price).toLocaleString();
    };

    const handleSelectPaymentMethod = name => {
        setPaymentMethod(name);
    };

    useQuery(getOrderProductById, {
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
            memberId: userId,
            creatorId: product?.creator?.id,
        },
        skip: product === undefined,
        onCompleted: data => {
            setOrderNumber(data.createOrder.orderNumber);
        },
    });

    const handlePurchase = async () => {
        const { IMP } = window;
        IMP.init(IAMPORT_MERCHANT_CODE);

        const paymentInfo = {
            pg: paymentMethod.pg,
            pay_method: paymentMethod.pay_method,
            merchant_uid: orderNumber,
            customer_uid: paymentMethod.customer_uid,
            name: product?.title,
            amount: product?.discountPrice,
            buyer_email: userEmail,
            buyer_name: userName,
            m_redirect_url: `${window.location.origin}/order/complete/${courseId}`,
        };
        try {
            await IMP.request_pay(paymentInfo);
        } catch (error) {
            console.error("request_pay error : ", error);
        }
    };

    useEffect(() => {
        if (product) {
            getOrderNumber();
        }
    }, [product]);

    return (
        <>
            <BasicHeader pageDescription={"결제"} />
            <Container>
                <HeadingXL margin={"0.75rem 0"}>도전자</HeadingXL>
                <PayerInfo />

                <HeadingXL margin={"0.75rem 0"}>도전 클래스</HeadingXL>
                <CourseIntroCard
                    productTitle={product?.title}
                    sortedSessionList={sortedSessionList}
                />

                <HeadingXL margin={"0.75rem 0"}>결제 금액</HeadingXL>
                <CourseAmountCard
                    price={product?.price}
                    discountPrice={product?.discountPrice}
                />

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

const Container = styled.div`
    padding: 0 1rem;
`;
