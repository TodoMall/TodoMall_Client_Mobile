import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useMutation, useQuery } from "@apollo/client";

import {
    buyProduct,
    verifyOrder,
} from "../apollo/domain/payment/payment.mutations";
import { getOrderByOrderNumber } from "../apollo/domain/payment/payment.queries";
import { COLOR, ORDER_STATE, PATH } from "../constants";
import { ReceiptCard } from "../domain/order/components";
import { BasicButton } from "../mds/button";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyXL, BodyXXL, HeadingXL } from "../mds/text";

const PaymentCompletePage = () => {
    const { userid: memberId } = { ...localStorage };
    const { courseId } = useParams();
    const { search } = useLocation();
    const navigate = useNavigate();

    const [isPaidSuccess, setIsPaidSuccess] = useState(false);
    const [orderByOrderNumberOutput, setOrderByOrderNumberOutput] =
        useState(null);

    const queryString = new URLSearchParams(search);
    const imp_success = JSON.parse(queryString.get("imp_success"));
    const impUid = queryString.get("imp_uid");
    const merchantUid = queryString.get("merchant_uid");
    let error_msg;
    if (!imp_success) {
        error_msg = queryString.get("error_msg");
    }

    const [verifyOrderFunc] = useMutation(verifyOrder, {
        variables: { impUid, merchantUid },
        onCompleted: data => {
            setIsPaidSuccess(data.verifyOrder.state === ORDER_STATE.SUCCESS);
        },
    });

    const [buyProductFunc] = useMutation(buyProduct, {
        variables: {
            productId: courseId,
            memberId: memberId,
            orderNumber: merchantUid,
        },
    });

    const { data: orderByOrderNumber } = useQuery(getOrderByOrderNumber, {
        variables: {
            orderNumber: merchantUid,
        },
    });

    useEffect(() => {
        verifyOrderFunc();
        if (orderByOrderNumber) {
            setOrderByOrderNumberOutput(
                orderByOrderNumber.getOrderByOrderNumber
            );
        }
        if (isPaidSuccess && imp_success) {
            buyProductFunc();
        }
    }, [isPaidSuccess, orderByOrderNumber]);

    const handleMovePage = () => {
        if (isPaidSuccess) {
            return navigate(PATH.MYCOURSE);
        }
        if (!isPaidSuccess) {
            return navigate(PATH.PAYMENT);
        }
    };

    return (
        <>
            <BasicHeader pageDescription={"결제 완료"} />
            <Container>
                {isPaidSuccess && (
                    <>
                        <HeadingXL margin={"1rem 0 0 0"}>
                            클래스가 성공적으로 추가됐어요
                        </HeadingXL>
                        <HeadingXL margin={"0 0 0.25rem"}>
                            데드라인 내에 미션 인증을 잊지 마세요!
                        </HeadingXL>
                        <BodyXXL>
                            시간 내에 세션 별 인증을 완수해야만 다만 세션을 계속
                            들을 수 있어요
                        </BodyXXL>
                        <ReceiptCard paymentInfo={orderByOrderNumberOutput} />
                    </>
                )}
                {!isPaidSuccess && (
                    <>
                        <HeadingXL margin={"1rem 0 0 0"}>
                            결제 과정 중에 문제가 발생했습니다
                        </HeadingXL>
                        <BodyXXL>{error_msg}</BodyXXL>
                        {/* TODO : 3D asset 확정되면 추가 */}
                    </>
                )}
                <ButtonWrapper>
                    <BasicButton onClick={handleMovePage}>
                        <BodyXL fontColor={COLOR.WHITE}>
                            {isPaidSuccess ? "메인으로 이동" : "다시 결제 하기"}
                        </BodyXL>
                    </BasicButton>
                </ButtonWrapper>
            </Container>
        </>
    );
};
export default PaymentCompletePage;

const Container = styled.div`
    padding: 0 1rem;
`;

const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 1rem;
    right: 1rem;
`;
