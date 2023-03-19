import styled from "styled-components";

import { COLOR } from "../../../constants";
import { Divider } from "../../../mds";
import { RowBox } from "../../../mds/box";
import { BodyL, BodyM } from "../../../mds/text";

const CourseIntroCard = ({ productTitle, sortedSessionList }) => {
    return (
        <Container>
            <CourseContainer>
                <BodyM fontColor={COLOR.GRAY500}>클래스명</BodyM>
                <BodyL margin={"0.5rem 0 0"}>{productTitle}</BodyL>
                <Divider margin={"1rem 0"} />
                <BodyM fontColor={COLOR.GRAY500}>커리큘럼</BodyM>
                {sortedSessionList?.map(session => {
                    return (
                        <RowBox key={session.orderBy} margin={"0 0 0.5rem"}>
                            <BodyL>{session.title}</BodyL>
                            <TextContainer>
                                <BodyM>인증기한</BodyM>
                                <BodyL
                                    margin={"0 0 0 0.25rem"}
                                    fontColor={COLOR.BRAND_COLOR}
                                >
                                    {session.duration}일
                                </BodyL>
                            </TextContainer>
                        </RowBox>
                    );
                })}
            </CourseContainer>
        </Container>
    );
};
export default CourseIntroCard;
const Container = styled.div``;

const CourseContainer = styled.div`
    border-radius: 1.25rem;
    padding: 1rem 1.25rem;
    background-color: ${COLOR.GRAY50};
`;

const TextContainer = styled.div`
    display: flex;
`;
