import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH } from "../../../constants";
import { BasicButton, NextArrowButton } from "../../../mds/button";
import { CheckIcon } from "../../../mds/icon";
import { BodyL, BodyXXXL } from "../../../mds/text";
import AgreementButtonItem from "./AgreementButtonItem";

const AgreementButtonBox = () => {
    const navigator = useNavigate();
    const [isAllSelected, setIsAllSelected] = useState(false);

    const agreementList = [
        {
            title: "서비스 이용약관 동의",
            required: true,
            detail: PATH.SERVICE,
        },
        {
            title: "개인정보 수집 및 이용 동의",
            required: true,
            detail: PATH.AGREEMENT_PERSONAL,
        },
        {
            title: "만14세 이상입니다",
            required: true,
            detail: null,
        },
        {
            title: "광고성 정보 수신 동의",
            required: false,
            detail: null,
        },
        {
            title: "앱 내 푸시알림 수신 동의",
            required: false,
            detail: null,
        },
    ];

    const onClickAllAgreement = () => {
        setIsAllSelected(!isAllSelected);
    };

    const agreementItems = agreementList.map((item, index) => {
        const [isAgreed, setIsAgreed] = useState(false);

        const onClickAgreementButton = () => {
            setIsAgreed(!isAgreed);
        };

        useEffect(() => {
            setIsAgreed(isAllSelected);
        }, [isAllSelected]);

        return (
            <AgreementButtonItem
                key={String(index)}
                isAgreed={isAgreed}
                onClick={onClickAgreementButton}
            >
                <BodyL>{item.required ? "(필수)" : "(선택)"}</BodyL>
                <BodyL>{item.title}</BodyL>
                {item.detail !== null && (
                    <NextArrowButton
                        onClick={() => navigator(item.detail)}
                        color={COLOR.GRAY800}
                    />
                )}
            </AgreementButtonItem>
        );
    });

    return (
        <Container>
            <AllAgreementContainer>
                <AllAgreementCheckButton onClick={onClickAllAgreement}>
                    <CheckIcon isChecked={isAllSelected} />
                </AllAgreementCheckButton>
                <BodyXXXL>약관 전체 동의</BodyXXXL>
            </AllAgreementContainer>
            {agreementItems}
            <BasicButton
                backgroundColor={COLOR.BRAND_COLOR}
                onClick={() => navigator(PATH.MYCOURSE)}
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
    margin: 1.125rem 0.5rem 1.125rem 0.5rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
