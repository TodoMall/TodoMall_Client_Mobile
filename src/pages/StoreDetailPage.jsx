import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getProductById } from "../apollo/domain/store";
import { COLOR, PATH } from "../constants";
import {
    CourseAmountTicket,
    CourseIntroCardList,
    CreatorProfile,
    ExpectedPerformance,
    OurGoalsDescription,
    RecommnedTarget,
    SessionIntroBox,
    StickyPayBox,
} from "../domain/store/components";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyL, BodyXS, BodyXXXL, HeadingXL, HeadingXXL } from "../mds/text";
import { isNull } from "../utils/isNull";

const StoreDetailPage = () => {
    const navigate = useNavigate();
    const { courseId } = useParams();

    const [product, setProduct] = useState();
    const [isDiscount, setIsDiscount] = useState(false);
    const [isFree, setIsFree] = useState(false);

    const { data } = useQuery(getProductById, {
        variables: { id: courseId },
        onCompleted: data => {
            setProduct(data.getProductById);
            setIsFree(data.getProductById.discountPercent === 100);
            setIsDiscount(data.getProductById.discountPercent !== 0);
        },
    });

    const totalDuration = product?.sessions.reduce((acc, session) => {
        return acc + session.duration;
    }, 0);

    const totalTodoLength = product?.sessions.reduce((acc, session) => {
        return acc + session.todos.length;
    }, 0);

    const handlePaymentPage = () => navigate(`${PATH.PAYMENT}/${courseId}`);

    return (
        <div>
            <BasicHeader pageDescription={"클래스 소개"} />

            <ProductImage src={product?.imageUrl} />

            <ProductIntro>
                <BodyL fontColor={COLOR.GRAY700}>
                    {product?.subDescription}
                </BodyL>
                <HeadingXXL>{product?.title}</HeadingXXL>
            </ProductIntro>

            <IntroContainer>
                <CourseIntroCardList
                    totalDuration={totalDuration}
                    totalTodoLength={totalTodoLength}
                    level={product?.level}
                    retryCount={product?.retryCount}
                />

                <CourseAmountTicket
                    title={product?.title}
                    description={product?.description}
                    price={product?.price?.toLocaleString()}
                    discountPrice={product?.discountPrice?.toLocaleString()}
                    discountPercent={product?.discountPercent}
                    onPay={handlePaymentPage}
                />
            </IntroContainer>

            <CreatorProfile
                image={product?.creator.imageUrl}
                name={product?.creator.name}
                career={product?.creator.career}
                description={product?.creator.description}
            />

            <ExpectedPerformance expectIts={product?.expectIts} />

            <RecommnedTarget
                recommends={product?.recommends}
                recommendUsers={product?.recommendUsers}
            />

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
                            <SessionIntroBox
                                key={idx}
                                isThumbnailNull={isThumbnailNull}
                                session={session}
                                sessionNumber={idx + 1}
                            />
                        );
                    })}
                </Description>
            </SessionIntroContainer>

            <OurGoalsDescription />

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
            <StickyPayBox
                price={product?.price}
                discountPrice={product?.discountPrice}
                discountPercent={product?.discountPercent}
                isDiscount={isDiscount}
                isFree={isFree}
                onPay={handlePaymentPage}
            />
        </div>
    );
};

export default StoreDetailPage;

const AdditionalInfoText = styled.p`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.75rem;
    letter-spacing: -0.01rem;
    color: ${COLOR.GRAY700};
`;

const AdditionalInfoContainer = styled.div`
    padding: 0 1.5rem;
    :not(:last-child) {
        margin-bottom: 0.25rem;
    }
    margin-bottom: 2rem;
`;

const SessionIntroContainer = styled.div`
    padding: 0 1rem;
`;

const IntroContainer = styled.div`
    padding: 0 1rem;
`;

const Description = styled.div`
    padding: 0 0.5rem;
`;

const ProductIntro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const ProductImage = styled.img`
    width: 100%;
    object-fit: contain;
`;
