import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useMutation } from "@apollo/client";

import { registerMember } from "../../../apollo/domain/member";
import { createOrder, verifyOrder } from "../../../apollo/domain/payment";
import {
    COLOR,
    LOCAL_STORAGE_KEYS,
    ONBORADING_PRODUCT,
    PATH,
} from "../../../constants";
import { useLocalStorage, useToggle } from "../../../hooks";
import { BasicButton } from "../../../mds/button";
import { CheckIcon } from "../../../mds/icon";
import { BodyL, BodyXXXL } from "../../../mds/text";
import AgreementColumn from "./AgreementColumn";

const AgreementButtonGroup = () => {
    const { USER_ID } = { ...localStorage };

    const {
        IS_SERVICE_AGREE,
        IS_PERSONAL_AGREE,
        IS_PUSHALARM_AGREE,
        IS_MARKETINGALARM_AGREE,
        IS_TUTORIAL_DONE,
    } = LOCAL_STORAGE_KEYS;

    const navigator = useNavigate();

    const [isCheckService, setIsCheckService, handleServiceStatus] =
        useToggle(false);
    const [isCheckPersonal, setIsCheckPersonal, handlePersonalStatus] =
        useToggle(false);
    const [isCheckAdult, setIsCheckAdult, handleAdultStatus] = useToggle(false);
    const [isCheckPush, setIsCheckPush, handlePushStatus] = useToggle(false);
    const [isCheckMarketing, setIsCheckMarketing, handleMarketingStatus] =
        useToggle(false);

    const [isAllSelected, setIsAllSelected] = useState(false);

    const isCheckAllRequired =
        isCheckService && isCheckPersonal && isCheckAdult;

    useLocalStorage(IS_SERVICE_AGREE, true);
    useLocalStorage(IS_PERSONAL_AGREE, true);
    const [, setStoredPush] = useLocalStorage(IS_PUSHALARM_AGREE, false);
    const [, setStoredMarketing] = useLocalStorage(
        IS_MARKETINGALARM_AGREE,
        false
    );
    useLocalStorage(IS_TUTORIAL_DONE, false);

    const onClickAllAgreement = () => {
        setIsAllSelected(!isAllSelected);
        setIsCheckService(!isAllSelected);
        setIsCheckPersonal(!isAllSelected);
        setIsCheckAdult(!isAllSelected);
        setIsCheckPush(!isAllSelected);
        setIsCheckMarketing(!isAllSelected);
    };

    const [registerMemberFn] = useMutation(registerMember, {
        variables: {
            id: USER_ID,
            agreement: {
                isPushAlarmAgree: isCheckPush,
                isMarketingAlarmAgree: isCheckMarketing,
            },
        },
    });
    const [createOrderFn] = useMutation(createOrder, {
        variables: {
            productId: ONBORADING_PRODUCT.productId,
            memberId: USER_ID,
            creatorId: ONBORADING_PRODUCT.creatorId,
        },
    });
    const [verifyOrderFn] = useMutation(verifyOrder);

    const onClickNextButton = async () => {
        setStoredPush(isCheckPush);
        setStoredMarketing(isCheckMarketing);

        await registerMemberFn();
        const order = await createOrderFn();
        console.log("order", order);
        await verifyOrderFn({
            variables: {
                orderId: order?.data.createOrder.id,
            },
            onCompleted: () => navigator(PATH.MYCOURSE),
        });
    };

    useEffect(() => {
        if (
            isCheckService &&
            isCheckPersonal &&
            isCheckAdult &&
            isCheckPush &&
            isCheckMarketing
        ) {
            setIsAllSelected(true);
        } else {
            setIsAllSelected(false);
        }
    }, [
        isCheckService,
        isCheckPersonal,
        isCheckAdult,
        isCheckPush,
        isCheckMarketing,
    ]);

    return (
        <Container>
            <AllAgreementContainer>
                <AllAgreementCheckButton onClick={onClickAllAgreement}>
                    <CheckIcon isChecked={isAllSelected} />
                </AllAgreementCheckButton>
                <BodyXXXL>약관 전체 동의</BodyXXXL>
            </AllAgreementContainer>

            <AgreementColumn
                detail={PATH.SERVICE}
                isAgreed={isCheckService}
                isRequired={true}
                onClick={handleServiceStatus}
            >
                서비스 이용약관 동의
            </AgreementColumn>

            <AgreementColumn
                detail={PATH.AGREEMENT_PERSONAL}
                isAgreed={isCheckPersonal}
                isRequired={true}
                onClick={handlePersonalStatus}
            >
                개인정보 수집 및 이용 동의
            </AgreementColumn>

            <AgreementColumn
                isAgreed={isCheckAdult}
                isRequired={true}
                onClick={handleAdultStatus}
            >
                만 14세 이상입니다
            </AgreementColumn>

            <AgreementColumn
                isAgreed={isCheckMarketing}
                onClick={handleMarketingStatus}
            >
                광고성 정보 수신 동의
            </AgreementColumn>

            <AgreementColumn isAgreed={isCheckPush} onClick={handlePushStatus}>
                앱 내 푸시알림 수신 동의
            </AgreementColumn>

            <BasicButton
                isDisabled={!isCheckAllRequired}
                backgroundColor={
                    isCheckAllRequired ? COLOR.BRAND_COLOR : COLOR.GRAY200
                }
                onClick={onClickNextButton}
            >
                <BodyL fontColor={COLOR.WHITE}>동의합니다</BodyL>
            </BasicButton>
        </Container>
    );
};

export default AgreementButtonGroup;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const AllAgreementContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${COLOR.GRAY50};
    border-radius: 1.25rem;
    width: 100%;
`;

const AllAgreementCheckButton = styled.button`
    background-color: transparent;
    border: none;
    margin: 1.125rem 1rem 1.125rem 1rem;
`;
