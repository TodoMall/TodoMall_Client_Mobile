import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getOrderByMemberId } from "../apollo/domain/member";
import { COLOR, PATH } from "../constants";
import { ProfileCard } from "../domain/member/components";
import { PaidClassBox } from "../domain/member/components";
import { ColBox, RowBox } from "../mds/box";
import { CSIcon, NoticeIcon, SettingIcon } from "../mds/icon";
import { GlobalNavBar } from "../mds/layout/mobile";
import { BodyL, BodyXXS, BodyXXXL, HeadingXL } from "../mds/text";

const MyPage = () => {
    const {
        userId = "e155ad7c-3547-4312-b09c-b3729c0b18c3",
        name = "김상혁",
        email = "tkdgur234@naver.com",
    } = {
        ...localStorage,
    };

    const [formattedPaidProduct, setFormattedPaidProduct] = useState([]);

    const { data } = useQuery(getOrderByMemberId, {
        variables: {
            memberId: userId,
        },
        onCompleted: data => {
            const copiedPaidProduct = [...data.getOrderByMemberId];
            const PaidProductSortedByDate = copiedPaidProduct.sort((a, b) => {
                return (
                    new Date(b.member.subscribeProducts.createdAt) -
                    new Date(a.member.subscribeProducts.createdAt)
                );
            });
            setFormattedPaidProduct(PaidProductSortedByDate);
        },
    });

    const navigate = useNavigate();
    const handleNotificationPage = () => navigate(PATH.NOTICE);
    const handleSettingPage = () => navigate(PATH.SETTING);
    const handleCSPage = () => (window.location.href = PATH.CS_CENTER);

    return (
        <Container>
            <ProfileCard
                marginBottom={"1rem"}
                backgroundColor={COLOR.WHITE}
                padding={0}
            >
                <RowBox>
                    <ColBox margin={"0 0 0 0.75rem"}>
                        <BodyXXXL>{name}</BodyXXXL>
                        <BodyXXS fontColor={COLOR.GRAY500}>{email}</BodyXXS>
                    </ColBox>
                    <SettingItem onClick={handleSettingPage}>
                        <SettingIcon />
                        <SettingText>설정</SettingText>
                    </SettingItem>
                </RowBox>
            </ProfileCard>
            <NoticeItem onClick={handleNotificationPage}>
                <RowBox justifyContent="flex-start">
                    <NoticeIcon color={COLOR.GRAY800} />
                    <BodyL margin={"0 0 0 0.75rem"}>공지사항</BodyL>
                </RowBox>
            </NoticeItem>
            <CSItem onClick={handleCSPage}>
                <RowBox justifyContent="flex-start">
                    <CSIcon color={COLOR.GRAY800} />
                    <BodyL margin={"0 0 0 0.75rem"}>문의하기</BodyL>
                </RowBox>
            </CSItem>
            <HeadingXL margin={"1rem 0.5rem 0.75rem 0.5rem"}>
                내 클래스
            </HeadingXL>
            <ClassContainer>
                {formattedPaidProduct?.map((item, idx) => {
                    return (
                        <PaidClassBox
                            key={item?.id}
                            courseId={item?.id}
                            challengeOrder={idx}
                            thumbnailUrl={item?.product.thumbnailUrl}
                            subscribeProducts={item?.member.subscribeProducts}
                        />
                    );
                })}
            </ClassContainer>
            <GlobalNavBar />
        </Container>
    );
};
export default MyPage;
const Container = styled.div`
    padding: 0 1rem 4rem 1rem;
`;

const ClassContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.5rem;
    div {
        flex: 0 0 48.8%;
    }
`;

const NoticeItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    width: 390px;
`;
const CSItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    width: 390px;
`;

const SettingItem = styled.div`
    display: flex;
    justify-content: center;
    p {
        margin-top: 2px;
    }
`;

const SettingText = styled.p`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${COLOR.GRAY500};
    margin-left: 0.25rem;
`;
