import styled from "styled-components";

import { COLOR } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { EmptySessionThumbnail } from "../../../mds/image";
import { BodyS, BodyXXXL } from "../../../mds/text";

const SessionIntroBox = ({ isThumbnailNull, session, sessionNumber }) => {
    return (
        <Container>
            {!isThumbnailNull && <SessionImg src={session?.thumbnailUrl} />}
            {isThumbnailNull && <EmptySessionThumbnail />}

            <RowBox margin={"0.75rem 0 0.25rem"}>
                <BodyS fontColor={COLOR.BRAND_COLOR}>
                    Session 0{sessionNumber}
                </BodyS>
                <BodyS fontColor={COLOR.ERROR500}>
                    인증기한 {session?.duration}일
                </BodyS>
            </RowBox>

            <BodyXXXL margin={"0 0 0.5rem"}>{session?.title}</BodyXXXL>
            {session?.todos.map((todo, idx) => {
                return (
                    <TodoIntroItem key={idx} justifyContent={"flex-start"}>
                        <TodoNumber>0{idx + 1}</TodoNumber>
                        <TodoTitle>{todo.title}</TodoTitle>
                    </TodoIntroItem>
                );
            })}
        </Container>
    );
};
export default SessionIntroBox;
const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 2rem;
    }
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
