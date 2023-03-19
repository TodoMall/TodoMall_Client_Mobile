import styled from "styled-components";

import { COLOR } from "../../../constants";
import { CalendarIcon, FlagIcon, LevelIcon, TodoIcon } from "../../../mds/icon";
import { BodyXL, DetailS } from "../../../mds/text";

const CourseIntroCardList = ({
    totalDuration,
    level,
    totalTodoLength,
    retryCount,
}) => {
    return (
        <Container>
            <IconBox>
                <CalendarIcon />
                <DetailS margin={"0.5rem 0 0 0"}>도전기간</DetailS>
                <BodyXL>{totalDuration}일</BodyXL>
            </IconBox>
            <IconBox>
                <LevelIcon />
                <DetailS margin={"0.5rem 0 0 0"}>난이도</DetailS>
                <BodyXL>{level}</BodyXL>
            </IconBox>
            <IconBox>
                <TodoIcon />
                <DetailS margin={"0.5rem 0 0 0"}>도전기간</DetailS>
                <BodyXL>{totalTodoLength}개</BodyXL>
            </IconBox>
            <IconBox>
                <FlagIcon />
                <DetailS margin={"0.5rem 0 0 0"}>도전기간</DetailS>
                <BodyXL>{retryCount}회</BodyXL>
            </IconBox>
        </Container>
    );
};

export default CourseIntroCardList;

const Container = styled.div`
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
