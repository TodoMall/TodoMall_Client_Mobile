import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getProductById } from "../apollo/domain/payment/payment.queries";
import { COLOR, PATH } from "../constants";
import { RowBox } from "../mds/box";
import { BasicButton } from "../mds/button";
import { CalendarIcon, FlagIcon, LevelIcon, TodoIcon } from "../mds/icon";
import { EmptySessionThumbnail } from "../mds/image";
import { BasicHeader } from "../mds/layout/mobile/headers";
import {
    BodyL,
    BodyS,
    BodyXL,
    BodyXS,
    BodyXXXL,
    DetailS,
    DetailXS,
    HeadingXL,
    HeadingXXL,
} from "../mds/text";
import { isNull } from "../utils/isNull";

const StoreDetailPage = () => {
    const { courseId } = useParams();
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    const handlePaymentPage = () => navigate(`${PATH.PAYMENT}/${courseId}`);
    const { data } = useQuery(getProductById, {
        variables: { id: courseId },
        onCompleted: data => {
            // setProduct(data.getProductById); // TODO : this origin
            setProduct(data.getProductByIdOutput);
        },
    });

    useEffect(() => {
        if (product) {
            document.title = product.title;
        }
    }, [product]);

    const totalDuration = product?.sessions.reduce((acc, session) => {
        return acc + session.duration;
    }, 0);

    const totalTodoLength = product?.sessions.reduce((acc, session) => {
        return acc + session.todos.length;
    }, 0);

    return (
        <>
            <BasicHeader pageDescription={"클래스 소개"} />
            <ProductImage src={product?.imageUrl} />
            <TitleContainer>
                <BodyL fontColor={COLOR.GRAY700}>
                    {product?.subDescription}
                </BodyL>
                <HeadingXXL>{product?.title}</HeadingXXL>
            </TitleContainer>
            <Container>
                <IconContainer>
                    <IconBox>
                        <CalendarIcon />
                        <DetailS margin={"0.5rem 0 0 0"}>도전기간</DetailS>
                        <BodyXL>{totalDuration}일</BodyXL>
                    </IconBox>
                    <IconBox>
                        <LevelIcon />
                        <DetailS margin={"0.5rem 0 0 0"}>난이도</DetailS>
                        <BodyXL>{product?.level}</BodyXL>
                    </IconBox>
                    <IconBox>
                        <TodoIcon />
                        <DetailS margin={"0.5rem 0 0 0"}>도전기간</DetailS>
                        <BodyXL>{totalTodoLength}개</BodyXL>
                    </IconBox>
                    <IconBox>
                        <FlagIcon />
                        <DetailS margin={"0.5rem 0 0 0"}>도전기간</DetailS>
                        <BodyXL>{product?.retryCount}회</BodyXL>
                    </IconBox>
                </IconContainer>

                <TicketContainer>
                    <TicketIntroBox>
                        <BodyXXXL margin={"0 0 0.5rem"}>
                            {product?.title}
                        </BodyXXXL>
                        <BodyXS fontColor={COLOR.GRAY700}>
                            {product?.description}
                        </BodyXS>
                    </TicketIntroBox>
                    <RowBox>
                        <TicketCircle radius={"0 0.75rem 0.75rem 0"} />
                        <DashedDivider />
                        <TicketCircle radius={"0.75rem 0 0 0.75rem"} />
                    </RowBox>
                    <AmountInfoContainer>
                        <RowBox>
                            <Box>
                                <DetailXS>이벤트</DetailXS>
                                <BodyXXXL fontColor={COLOR.BRAND_COLOR}>
                                    {product?.discountPercent}% 할인
                                </BodyXXXL>
                            </Box>
                            <Box>
                                <LineThroughText>
                                    판매가 {product?.price.toLocaleString()}원
                                </LineThroughText>
                                <BodyXXXL fontColor={COLOR.ERROR500}>
                                    {product?.discountPrice.toLocaleString()}원
                                </BodyXXXL>
                            </Box>
                        </RowBox>
                        <BasicButton onClick={handlePaymentPage}>
                            <BodyS fontColor={COLOR.WHITE}>
                                클래스 도전하기
                            </BodyS>
                        </BasicButton>
                    </AmountInfoContainer>
                </TicketContainer>
            </Container>

            <CreatorProfile>
                <CreatorImage src={product?.creator.imageUrl} alt="" />
                <BodyXL margin={"0.5rem 0 0.25rem"}>
                    {product?.creator.name} 전문가
                </BodyXL>
                <CreatorCareer>
                    {product?.creator.career.map((career, idx) => {
                        return <DetailXS key={idx}>{career}</DetailXS>;
                    })}
                </CreatorCareer>
                <BodyXS margin={"1.25rem 0 0 0"}>
                    {product?.creator.description}
                </BodyXS>
            </CreatorProfile>

            <ExpectedPerformance>
                <Description>
                    <BodyXS fontColor={COLOR.GRAY700}>
                        지금 시작하면 나만의
                    </BodyXS>
                    <RowBox justifyContent="flex-start">
                        <HeadingXL fontColor={COLOR.BRAND_COLOR}>
                            디지털 일러스트
                        </HeadingXL>
                        <HeadingXL>를 만들 수 있어요</HeadingXL>
                    </RowBox>
                </Description>
                <ExpectedPerformanceImg src={product?.expectIts.imageUrl} />
            </ExpectedPerformance>

            <RecommendContainer>
                <Description>
                    <BodyXS fontColor={COLOR.GRAY700}>
                        이럴때 들으면 좋아요!
                    </BodyXS>
                    <HeadingXL margin={"0 0 0.75rem"}>
                        이럴때 들으면 좋아요!
                    </HeadingXL>
                </Description>
                {product?.recommends.map((item, idx) => {
                    return (
                        <RecommendInfoBox key={idx}>
                            <RecommendImg src={item.imageUrl} />
                            <RecommendDescriptionBox>
                                <HeadingXL margin={"0.75rem 0 0.25rem"}>
                                    {item.title}
                                </HeadingXL>
                                <RecommendDescription>
                                    {item.description}
                                </RecommendDescription>
                            </RecommendDescriptionBox>
                        </RecommendInfoBox>
                    );
                })}
            </RecommendContainer>

            <RecommendUserContainer>
                <RecommendUserIntroBox>
                    <BodyXS fontColor={COLOR.GRAY200}>
                        이럴때 들으면 좋아요!
                    </BodyXS>
                    <HeadingXL fontColor={COLOR.WHITE} margin={"0 0 1rem"}>
                        이런 분들에게 추천합니다!
                    </HeadingXL>
                </RecommendUserIntroBox>
                {product?.recommendUsers.map((item, idx) => {
                    return (
                        <RecommendUserDescriptionBox key={idx}>
                            <BodyS fontColor={COLOR.BRAND_COLOR}>
                                0{idx + 1}
                            </BodyS>
                            <BodyXL fontColor={COLOR.WHITE}>
                                {item.title}
                            </BodyXL>
                            <BodyL fontColor={COLOR.WHITE}>
                                {item.description}
                            </BodyL>
                        </RecommendUserDescriptionBox>
                    );
                })}
            </RecommendUserContainer>

            <SessionIntroContainer>
                <Description>
                    <BodyXS fontColor={COLOR.GRAY700}>
                        커리큘럼을 따라하면
                    </BodyXS>
                    <HeadingXL margin={"0 0 0.75rem"}>
                        이런 결과물을 만들 수 있어요.
                    </HeadingXL>
                    {product?.sessions.map((session, idx) => {
                        const isThumbnailNull = isNull(session.thumbnailUrl);
                        return (
                            <SessionIntroBox key={idx}>
                                {!isThumbnailNull && (
                                    <SessionImg src={session.thumbnailUrl} />
                                )}
                                {isThumbnailNull && <EmptySessionThumbnail />}
                                <RowBox margin={"0.75rem 0 0.25rem"}>
                                    <BodyS fontColor={COLOR.BRAND_COLOR}>
                                        Session 0{idx + 1}
                                    </BodyS>
                                    <BodyS fontColor={COLOR.ERROR500}>
                                        인증기한 {session.duration}일
                                    </BodyS>
                                </RowBox>
                                <BodyXXXL margin={"0 0 0.5rem"}>
                                    {session.title}
                                </BodyXXXL>
                                {session.todos.map((todo, idx) => {
                                    return (
                                        <TodoIntroItem
                                            key={idx}
                                            justifyContent={"flex-start"}
                                        >
                                            <TodoNumber>0{idx + 1}</TodoNumber>
                                            <TodoTitle>{todo.title}</TodoTitle>
                                        </TodoIntroItem>
                                    );
                                })}
                            </SessionIntroBox>
                        );
                    })}
                </Description>
            </SessionIntroContainer>

            <MyPlanitEduGoalContainer>
                <MyPlanitEduGoalIntro>
                    <BodyXS fontColor={COLOR.GRAY200}>
                        투두몰이 목표를 달성하기 위해
                    </BodyXS>
                    <HeadingXL fontColor={COLOR.WHITE} margin={"0 0 1rem"}>
                        추구하고 있는 교육의 가치는?
                    </HeadingXL>
                </MyPlanitEduGoalIntro>
                <MyPlanitEduGoalBox>
                    <BodyS fontColor={COLOR.BRAND_COLOR}>
                        Easy and Clear start
                    </BodyS>
                    <BodyXL margin={"0.25rem 0 0.5rem"} fontColor={COLOR.WHITE}>
                        부담 없이, 가볍게 시작해요.
                    </BodyXL>
                    <BodyL fontColor={COLOR.WHITE}>
                        높은 학습 비용과 긴 강의 시간은 이제 그만!
                    </BodyL>
                    <BodyL fontColor={COLOR.WHITE}>
                        필요한 정보만 다루니깐, 가볍고 쉽게 시작해요.
                    </BodyL>
                </MyPlanitEduGoalBox>

                <MyPlanitEduGoalBox>
                    <BodyS fontColor={COLOR.BRAND_COLOR}>
                        Concise learning
                    </BodyS>
                    <BodyXL margin={"0.25rem 0 0.5rem"} fontColor={COLOR.WHITE}>
                        필요한 정보만 학습해요.
                    </BodyXL>
                    <BodyL fontColor={COLOR.WHITE}>불필요한 이론은 빼고,</BodyL>
                    <BodyL fontColor={COLOR.WHITE}>
                        나에게 딱 필요한 것만 집중해서 학습해요.
                    </BodyL>
                </MyPlanitEduGoalBox>

                <MyPlanitEduGoalBox>
                    <BodyS fontColor={COLOR.BRAND_COLOR}>
                        Actionable learning
                    </BodyS>
                    <BodyXL margin={"0.25rem 0 0.5rem"} fontColor={COLOR.WHITE}>
                        차근차근 따라하며 배워요.
                    </BodyXL>
                    <BodyL fontColor={COLOR.WHITE}>
                        아직도 앉아서 이론만 다루는 강의를 듣나요?
                    </BodyL>
                    <BodyL fontColor={COLOR.WHITE}>
                        투두리스트를 차근차근 따라해보며 배워요.
                    </BodyL>
                </MyPlanitEduGoalBox>

                <MyPlanitEduGoalBox>
                    <BodyS fontColor={COLOR.BRAND_COLOR}>
                        Makerable learning
                    </BodyS>
                    <BodyXL margin={"0.25rem 0 0.5rem"} fontColor={COLOR.WHITE}>
                        나만의 작업물을 만드세요.
                    </BodyXL>
                    <BodyL fontColor={COLOR.WHITE}>
                        만드는 일이 가장 재밌습니다.
                    </BodyL>
                    <BodyL fontColor={COLOR.WHITE}>
                        작업물을 직접 만들며 학습해요.
                    </BodyL>
                </MyPlanitEduGoalBox>
            </MyPlanitEduGoalContainer>

            {product?.additionalInfoList.length > 0 && (
                <AdditionalInfoContainer>
                    <BodyXXXL>클래스 시작 전 확인해주세요!</BodyXXXL>
                    {product?.additionalInfoList.map((additionalInfo, idx) => {
                        return (
                            <AdditionalInfoText key={idx}>
                                - {additionalInfo}
                            </AdditionalInfoText>
                        );
                    })}
                </AdditionalInfoContainer>
            )}

            {/* TODO : ticket 따라다니는 기준 확실하게 들은 후 구현 */}
        </>
    );
};
export default StoreDetailPage;

const LineThroughText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
    text-decoration: line-through;
`;

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const AmountInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
`;

const DashedDivider = styled.div`
    width: 100%;
    height: 1px;
    margin: 0.5rem 2rem;
    border: 1px dashed ${COLOR.GRAY200};
`;

const TicketCircle = styled.div`
    width: 0.75rem;
    height: 1.5rem;
    background: ${COLOR.WHITE};
    border-radius: ${props => props.radius};
    z-index: 1;
`;
const TicketIntroBox = styled.div`
    padding: 1rem 1.25rem;
`;

const TicketContainer = styled.div`
    background-color: ${COLOR.GRAY50};
`;

const MyPlanitEduGoalContainer = styled.div`
    margin: 2rem 0;
    padding: 1.25rem 1rem;
    background-color: ${COLOR.GRAY800};
`;

const MyPlanitEduGoalIntro = styled.div`
    padding: 0 0.5rem;
`;
const MyPlanitEduGoalBox = styled.div`
    :not(:last-child) {
        margin-bottom: 0.5rem;
    }
    padding: 1.25rem 1rem;
    border-radius: 1.25rem;
    background-color: ${COLOR.GRAY600};
`;

const AdditionalInfoText = styled.p`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.75rem;
    letter-spacing: -0.01rem;
    color: ${COLOR.GRAY700};
`;

const AdditionalInfoContainer = styled.div`
    /* TODO : 만약 container 안에 들어가게 된다면 padding : 0 0.5rem 으로 변경 */
    padding: 0 1.5rem;
    :not(:last-child) {
        margin-bottom: 0.25rem;
    }
    margin-bottom: 2rem;
`;

const TodoIntroItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    :not(:last-child) {
        margin-bottom: 0.5rem;
    }
`;

const TodoTitle = styled.p`
    margin-left: 0.75rem;
`;

const TodoNumber = styled.p`
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
    color: ${COLOR.BRAND_COLOR};
`;

const SessionImg = styled.img`
    width: 100%;
    border-radius: 1.25rem;
`;
const SessionIntroBox = styled.div`
    :not(:last-child) {
        margin-bottom: 2rem;
    }
`;

const SessionIntroContainer = styled.div`
    padding: 0 1rem;
`;

const RecommendDescriptionBox = styled.div`
    padding: 0 0.5rem;
`;

const Container = styled.div`
    padding: 0 1rem;
`;

const RecommendUserContainer = styled.div`
    margin-bottom: 2rem;
    padding: 1.25rem 1rem;
    background-color: ${COLOR.GRAY800};
`;

const RecommendUserIntroBox = styled.div`
    padding: 0 0.5rem;
`;
const RecommendUserDescriptionBox = styled.div`
    :not(:last-child) {
        margin-bottom: 0.5rem;
    }
    padding: 1.25rem 1rem;
    border-radius: 0.5rem;
    background-color: ${COLOR.GRAY600};
`;

const ExpectedPerformance = styled.div`
    padding: 0 1rem;
    margin-bottom: 2.25rem;
`;

const RecommendContainer = styled.div`
    padding: 0 1rem;
`;

const RecommendInfoBox = styled.div`
    margin-bottom: 2rem;
`;

const RecommendImg = styled.img`
    width: 100%;
    border-radius: 1.25rem;
`;

const RecommendDescription = styled.p`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.75rem;
    letter-spacing: -0.01rem;
    color: ${COLOR.GRAY700};
`;

const ExpectedPerformanceImg = styled.img`
    width: 100%;
    border-radius: 1.25rem;
`;
const Description = styled.div`
    padding: 0 0.5rem;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0 1rem 0;
`;

const IconBox = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 5.25rem;
    padding: 0.75rem 1rem;
    border-radius: 1.25rem;
    background-color: ${COLOR.GRAY50};
`;
const CreatorProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
    padding: 1.25rem 1rem;
    background: ${COLOR.GRAY50};
    p {
        text-align: center;
    }
`;

const ProductImage = styled.img`
    width: 100%;
    object-fit: contain;
`;

const CreatorImage = styled.img`
    width: 3.25rem;
    height: 3.25rem;
    object-fit: contain;
    border-radius: 2.75rem;
`;

const CreatorCareer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
`;
