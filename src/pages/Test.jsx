import styled from "styled-components";

import { COLOR, PROCESS_STATUS } from "../constants";
import { ProfileCard } from "../domain/member/components";
import { BasicButton, NextArrowButton } from "../mds/button";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyL, BodyXL, DetailS, HeadingXL, HeadingXXL } from "../mds/text";

const Test = () => {
    const { SUCCESS, WAITING, FAIL } = PROCESS_STATUS;
    //const { courseId } = useParams();,,;

    return (
        <>
            <BasicHeader pageDescription={"클래스 정보"}></BasicHeader>
            <ProductImage src="https://placeimg.com/200/100/any" />
            <MyCourseIntro>
                <BodyL fontColor={COLOR.GRAY700}>4번째 도전</BodyL>
                <HeadingXXL>랜딩 페이지 만들고 데이터 분석하기</HeadingXXL>
                <BodyL fontColor={COLOR.GRAY700}>
                    개발 지식이 하나도 없어도 노션을 사용하여 웹사이트를
                    제작하고 구글 애널리틱스를 통해 데이터 수집 환경을 만들 수
                    있습니다. 데이터를 수집하고 다양한 인사이트를 얻어봐요!
                </BodyL>
                <ProfileCard
                    padding="1rem"
                    marginTop="1.5rem"
                    marginBottom="0.75rem"
                >
                    <TextSetContainer>
                        <BodyXL margin="0.25rem 0rem">Famelee 전문가</BodyXL>
                        <DetailS>스타트업 CPO</DetailS>
                    </TextSetContainer>
                </ProfileCard>
            </MyCourseIntro>
            <MyCourseContainer>
                <HeadingXL margin={"0 0 0.75rem"}>학습 상황</HeadingXL>
                <ContentContainer>
                    <HeadingXL margin={"0.25rem 0.75rem 0.5rem"}>
                        개발자 없이 웹사이트 제작
                    </HeadingXL>
                    <TodoContainer>
                        <BodyL>노 코드 툴, 노션 시작하기</BodyL>
                        <NextArrowButton
                            onClick={() => navigator(detail)}
                            color={COLOR.GRAY800}
                        />
                    </TodoContainer>
                    <TodoContainer>
                        <BodyL>노션으로 웹사이트 구조 만들기</BodyL>
                        <NextArrowButton
                            onClick={() => navigator(detail)}
                            color={COLOR.GRAY800}
                        />
                    </TodoContainer>
                    <MissionContainer>
                        <TextSetContainer>
                            <BodyL fontColor={COLOR.SUCCESS}>인증</BodyL>
                            <BodyL fontColor={COLOR.GRAY600}>
                                랜딩 페이지 만들기
                            </BodyL>
                        </TextSetContainer>
                        <BasicButton
                            backgroundColor={COLOR.GRAY200}
                            width={100}
                        >
                            <BodyXL fontColor={COLOR.WHITE}>사진 보기</BodyXL>
                        </BasicButton>
                    </MissionContainer>
                </ContentContainer>
            </MyCourseContainer>
        </>
    );
};
export default Test;

const ProductImage = styled.img`
    width: 100%;
    object-fit: contain;
`;
const MyCourseIntro = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding: 0.5rem;
`;
const MyCourseContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding: 1rem;
`;
const ContentContainer = styled.div`
    width: 100%;
    background-color: ${COLOR.GRAY50};
    border-radius: 1.25rem;
    padding: 1rem;
`;
const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 1rem;
`;

const MissionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TextSetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 1rem;
`;

/**
 * <CourseCurriculum
                        onClose={handleClose}
                        subscribeProduct={subscribeProduct}
                        subscribeSession={subscribeSession}
                    />
 */

/**
 * <NextArrowButton
                            //onClick={() => navigator(detail)}
                            color={COLOR.GRAY800}
                        />
 */
