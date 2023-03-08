import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, LOCAL_STORAGE_KEYS, PATH } from "../../../constants";
import { useLocalStorage, useToggle } from "../../../hooks";
import { BasicButton } from "../../../mds/button";
import { CheckIcon } from "../../../mds/icon";
import { BodyL, BodyXXXL } from "../../../mds/text";
import AgreementButtonItem from "./AgreementButtonItem";

const AgreementButtonBox = () => {
    const { IS_PUSHALARM_AGREE, IS_MARKETINGALARM_AGREE, IS_TUTORIAL_DONE } =
        LOCAL_STORAGE_KEYS;

    const navigator = useNavigate();

    const [isAllSelected, setIsAllSelected] = useState(false);
    const [isRequiredSelectedCount, setIsRequiredSelectedCount] = useState(0);

    const [isAgreePush, setIsAgreePush, handleAgreePushStatus] =
        useToggle(false);
    const [isAgreeAd, setIsAgreeAd, handleAgreeAdStatus] = useToggle(false);

    const [isTutorialDone] = useLocalStorage(IS_TUTORIAL_DONE, false);
    const [isPushAgree] = useLocalStorage(IS_PUSHALARM_AGREE, false);
    const [isMarketingAgree] = useLocalStorage(IS_MARKETINGALARM_AGREE, false);

    const requireAgreementList = [
        {
            title: "서비스 이용약관 동의",
            detail: PATH.SERVICE,
        },
        {
            title: "개인정보 수집 및 이용 동의",
            detail: PATH.AGREEMENT_PERSONAL,
        },
        {
            title: "만14세 이상입니다",
            detail: null,
        },
    ];

    const onClickAllAgreement = () => {
        setIsAllSelected(!isAllSelected);
        setIsAgreePush(!isAllSelected);
        setIsAgreeAd(!isAllSelected);
    };

    const onClickNextButton = () => {
        navigator(PATH.MYCOURSE);
    };

    const isAllAgreed = () => {
        if (isAllSelected) {
            return true;
        }

        if (isRequiredSelectedCount === requireAgreementList.length) {
            return true;
        }
        return false;
    };

    const RequireAgreementItems = requireAgreementList.map((item, index) => {
        const [isAgreed, setIsAgreed] = useState(false);

        const onClickAgreementButton = () => {
            const value = !isAgreed;

            if (value) {
                setIsRequiredSelectedCount(prev => prev + 1);
            } else {
                setIsRequiredSelectedCount(prev => prev - 1);
            }

            setIsAgreed(value);
        };

        useEffect(() => {
            if (isAllSelected) {
                setIsAgreed(true);
                setIsRequiredSelectedCount(requireAgreementList.length);
            } else {
                setIsAgreed(false);
                setIsRequiredSelectedCount(0);
            }
        }, [isAllSelected]);

        return (
            <AgreementButtonItem
                key={String(index)}
                isAgreed={isAgreed}
                onClick={onClickAgreementButton}
                detail={item.detail}
            >
                <BodyL fontColor={COLOR.GRAY900}>(필수)</BodyL>
                <BodyL>&nbsp; {item.title}</BodyL>
            </AgreementButtonItem>
        );
    });

    return (
        <Container>
            <AllAgreementContainer>
                <AllAgreementCheckButton onClick={onClickAllAgreement}>
                    <CheckIcon isChecked={isAllSelected} />
                </AllAgreementCheckButton>
                <BodyXXXL fontColor={COLOR.GRAY900}>약관 전체 동의</BodyXXXL>
            </AllAgreementContainer>

            {RequireAgreementItems}

            <AgreementButtonItem
                isAgreed={isAgreeAd}
                onClick={handleAgreeAdStatus}
            >
                <BodyL fontColor={COLOR.GRAY500}>(선택)</BodyL>
                <BodyL>&nbsp; 광고성 정보 수신 동의</BodyL>
            </AgreementButtonItem>

            <AgreementButtonItem
                isAgreed={isAgreePush}
                onClick={handleAgreePushStatus}
            >
                <BodyL fontColor={COLOR.GRAY500}>(선택)</BodyL>
                <BodyL>&nbsp; 앱 내 푸시알림 수신 동의</BodyL>
            </AgreementButtonItem>

            <BasicButton
                isDisabled={!isAllAgreed()}
                backgroundColor={
                    isAllAgreed() ? COLOR.BRAND_COLOR : COLOR.GRAY200
                }
                onClick={onClickNextButton}
            >
                <BodyL fontColor={COLOR.WHITE}>동의합니다</BodyL>
            </BasicButton>
        </Container>
    );
};

export default AgreementButtonBox;

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
