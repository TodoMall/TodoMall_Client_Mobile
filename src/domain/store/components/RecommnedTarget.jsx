import styled from "styled-components";

import { COLOR } from "../../../constants";
import { BodyL, BodyS, BodyXL, BodyXS, HeadingXL } from "../../../mds/text";

const RecommnedTarget = ({ recommends, recommendUsers }) => {
    return (
        <Container>
            <RecommendContainer>
                <Description>
                    <BodyXS fontColor={COLOR.GRAY700}>
                        클래스가 도움이 될 지 모르겠나요?
                    </BodyXS>
                    <HeadingXL margin={"0 0 0.75rem"}>
                        이럴때 들으면 좋아요!
                    </HeadingXL>
                </Description>
                {recommends?.map((item, idx) => {
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
                {recommendUsers?.map((item, idx) => {
                    return (
                        <RecommendUserDescriptionBox key={idx}>
                            <BodyS fontColor={COLOR.BRAND_COLOR}>
                                0{idx + 1}
                            </BodyS>
                            <BodyXL fontColor={COLOR.WHITE}>
                                {item?.title}
                            </BodyXL>
                            <BodyL fontColor={COLOR.WHITE}>
                                {item.description}
                            </BodyL>
                        </RecommendUserDescriptionBox>
                    );
                })}
            </RecommendUserContainer>
        </Container>
    );
};

export default RecommnedTarget;

const Container = styled.div``;
const RecommendDescriptionBox = styled.div`
    padding: 0 0.5rem;
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
const Description = styled.div`
    padding: 0 0.5rem;
`;
