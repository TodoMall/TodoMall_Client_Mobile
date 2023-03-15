import styled from "styled-components";

import { COLOR } from "../../../constants";
import { BodyL, BodyS, BodyXL, BodyXS, HeadingXL } from "../../../mds/text";

const OurGoalsDescription = () => {
    return (
        <Container>
            <IntroBox>
                <BodyXS fontColor={COLOR.GRAY200}>
                    투두몰이 목표를 달성하기 위해
                </BodyXS>
                <HeadingXL fontColor={COLOR.WHITE} margin={"0 0 1rem"}>
                    추구하고 있는 교육의 가치는?
                </HeadingXL>
            </IntroBox>

            <GoalCard>
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
            </GoalCard>

            <GoalCard>
                <BodyS fontColor={COLOR.BRAND_COLOR}>Concise learning</BodyS>
                <BodyXL margin={"0.25rem 0 0.5rem"} fontColor={COLOR.WHITE}>
                    필요한 정보만 학습해요.
                </BodyXL>
                <BodyL fontColor={COLOR.WHITE}>불필요한 이론은 빼고,</BodyL>
                <BodyL fontColor={COLOR.WHITE}>
                    나에게 딱 필요한 것만 집중해서 학습해요.
                </BodyL>
            </GoalCard>

            <GoalCard>
                <BodyS fontColor={COLOR.BRAND_COLOR}>Actionable learning</BodyS>
                <BodyXL margin={"0.25rem 0 0.5rem"} fontColor={COLOR.WHITE}>
                    차근차근 따라하며 배워요.
                </BodyXL>
                <BodyL fontColor={COLOR.WHITE}>
                    아직도 앉아서 이론만 다루는 강의를 듣나요?
                </BodyL>
                <BodyL fontColor={COLOR.WHITE}>
                    투두리스트를 차근차근 따라해보며 배워요.
                </BodyL>
            </GoalCard>

            <GoalCard>
                <BodyS fontColor={COLOR.BRAND_COLOR}>Makerable learning</BodyS>
                <BodyXL margin={"0.25rem 0 0.5rem"} fontColor={COLOR.WHITE}>
                    나만의 작업물을 만드세요.
                </BodyXL>
                <BodyL fontColor={COLOR.WHITE}>
                    만드는 일이 가장 재밌습니다.
                </BodyL>
                <BodyL fontColor={COLOR.WHITE}>
                    작업물을 직접 만들며 학습해요.
                </BodyL>
            </GoalCard>
        </Container>
    );
};
export default OurGoalsDescription;

const Container = styled.div`
    margin: 2rem 0;
    padding: 1.25rem 1rem;
    background-color: ${COLOR.GRAY800};
`;

const IntroBox = styled.div`
    padding: 0 0.5rem;
`;
const GoalCard = styled.div`
    :not(:last-child) {
        margin-bottom: 0.5rem;
    }
    padding: 1.25rem 1rem;
    border-radius: 1.25rem;
    background-color: ${COLOR.GRAY600};
`;
