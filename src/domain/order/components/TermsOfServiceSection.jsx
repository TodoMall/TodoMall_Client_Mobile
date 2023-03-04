import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR } from "../../../constants";
import { useToggle } from "../../../hooks";
import { DetailBoxCoulmn } from "../../../mds";
import { RowBox } from "../../../mds/box";
import { NextArrowButton, UnderArrowButton } from "../../../mds/button";
import { BodyL } from "../../../mds/text";

const TermsOfServiceSection = () => {
    const navigate = useNavigate();
    const handleTermOfServicePage = () => navigate(PATH.SERVICE);
    const handleTermOfPersonalPage = () => navigate(PATH.SETTING_PERSONAL);
    const [isShowRefundToggle, _, handleToggle] = useToggle();

    return (
        <TermsContainer>
            <SettingItem onClick={handleTermOfServicePage}>
                <DetailBoxCoulmn>
                    <BodyL>서비스 이용약관</BodyL>
                </DetailBoxCoulmn>
            </SettingItem>
            <SettingItem onClick={handleTermOfPersonalPage}>
                <DetailBoxCoulmn>
                    <BodyL>개인정보처리방침</BodyL>
                </DetailBoxCoulmn>
            </SettingItem>
            <SettingItem onClick={handleToggle}>
                <RowBox>
                    <BodyL>환불 안내</BodyL>
                    {isShowRefundToggle ? (
                        <UnderArrowButton color={COLOR.GRAY800} />
                    ) : (
                        <NextArrowButton color={COLOR.GRAY800} />
                    )}
                </RowBox>
            </SettingItem>

            {isShowRefundToggle && (
                <RefuncContainer>
                    <Description>
                        <BoldText>환불이 불가능한 경우</BoldText>
                        <ThinText>
                            ① 주어진 시간 내 미션 인증을 성공하지 못해 소멸된
                            클래스
                        </ThinText>
                        <ThinText>
                            ② 아직 소멸하지 않았고, 결제일로부터 7일이 경과된
                            클래스
                        </ThinText>
                        <BoldText>환불이 가능한 경우</BoldText>
                        <ThinText>
                            ① myplanit.unicorn@gmail.com으로 환불을 요청하시면,
                            담당자가 도와드립니다.
                        </ThinText>
                        <ThinText>
                            ② 전체 환불 : 결제가 이루어졌지만, 클래스를
                            성공적으로 다운로드 받지 못한 경우
                        </ThinText>
                        <ThinText>
                            ③ 부분 환불 : 아직 소멸되지 않았고, 결제일로부터 7일
                            이내인 클래스
                        </ThinText>
                        <BoldText>부분 환불 방식</BoldText>
                        <ThinText>
                            ① 아직 소멸하지 않았고, 결제일로부터 7일 이내인
                            클래스는 부분 환불이 가능합니다.
                        </ThinText>
                        <ThinText>
                            ② 결제액 부분 환불률을 적용한 금액을 환불합니다.
                            부분 환불률은 클래스의 구성 세션 중에서 미시작
                            세션의 비율로 산정합니다.
                        </ThinText>
                        <ThinText>
                            ③ 결제 대금을 지급한 방법과 같은 방법으로 환급을
                            진행합니다.
                        </ThinText>
                        <ThinText>
                            ④ 환불 요청이 접수된 날로부터, 3 영업일 이내
                            진행됩니다. 단, PG사 및 카드사의 상황에 따라 환불이
                            최대 7일까지 지연될 수 있습니다.
                        </ThinText>
                    </Description>
                    <TableContainer>
                        <thead>
                            <TableRow>
                                <TableHeader>클래스</TableHeader>
                                <TableHeader>세션이 3개인 클래스</TableHeader>
                                <TableHeader>세션이 4개인 클래스</TableHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            <TableRow>
                                <TableHeader>1번째 세션 도전 중</TableHeader>
                                <TableContent>66% 환불</TableContent>
                                <TableContent>75% 환불</TableContent>
                            </TableRow>
                            <TableRow>
                                <TableHeader>2번째 세션 도전 중</TableHeader>
                                <TableContent>33% 환불</TableContent>
                                <TableContent>50% 환불</TableContent>
                            </TableRow>
                            <TableRow>
                                <TableHeader>3번째 세션 도전 중</TableHeader>
                                <TableContent>0% 환불</TableContent>
                                <TableContent>25% 환불</TableContent>
                            </TableRow>
                            <TableRow>
                                <TableHeader>4번째 세션 도전 중</TableHeader>
                                <TableContent>-</TableContent>
                                <TableContent>0% 환불</TableContent>
                            </TableRow>
                        </tbody>
                    </TableContainer>
                </RefuncContainer>
            )}
        </TermsContainer>
    );
};
export default TermsOfServiceSection;
const TermsContainer = styled.div`
    margin: 0.5rem 0;
`;
const TableContainer = styled.table`
    width: 100%;
    padding: 0.5rem 0;
`;
const RefuncContainer = styled.div`
    padding: 0 0.5rem;
`;

const Description = styled.div`
    padding: 0 0.5rem;
`;

const BoldText = styled.p`
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
`;

const ThinText = styled.p`
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
`;
const TableRow = styled.tr`
    width: calc(100% / 3);
`;
const TableHeader = styled.td`
    font-weight: 500;
    font-size: 11px;
    line-height: 18px;
    letter-spacing: -0.01rem;
    text-align: center;
    border: 1px solid ${COLOR.GRAY100};
    background-color: ${COLOR.GRAY50};
`;
const TableContent = styled.td`
    font-weight: 400;
    font-size: 11px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.01rem;
    border: 1px solid ${COLOR.GRAY100};
`;
const SettingItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3.25rem;
`;
