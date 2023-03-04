import styled from "styled-components";

import { COLOR } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { BasicChip } from "../../../mds/chip";
import { BodyXXXL } from "../../../mds/text";

const RecommendCard = ({
    title,
    subDescription,
    level,
    thumbnailUrl,
    sessions,
}) => {
    const [totalDuration, totalTodoLength] = sessions.reduce(
        (acc, session) => {
            return [acc[0] + session.duration, acc[1] + session.todos.length];
        },
        [0, 0]
    );

    return (
        <Container>
            <Thumbnail src={thumbnailUrl} />
            <ClassInfoBox>
                <RowBox justifyContent={"flex-start"}>
                    <BasicChip>
                        <ChipText>{totalDuration}일</ChipText>
                    </BasicChip>
                    <BasicChip>
                        <ChipText>{level}</ChipText>
                    </BasicChip>
                    <BasicChip>
                        <ChipText>{totalTodoLength}개의 투두</ChipText>
                    </BasicChip>
                </RowBox>
                <BodyXXXL>{title}</BodyXXXL>
                <RecommendClassDescription>
                    {subDescription}
                </RecommendClassDescription>
            </ClassInfoBox>
        </Container>
    );
};
export default RecommendCard;
const ClassInfoBox = styled.div`
    padding: 0 0.25rem;
`;
const Container = styled.div`
    width: 100%;
    min-width: 8.75rem;
`;
const Thumbnail = styled.img`
    width: 100%;
    border-radius: 1.25rem;
`;
const ChipText = styled.p`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: -0.01rem;
    color: ${COLOR.GRAY500};
`;

const RecommendClassDescription = styled.p`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${COLOR.GRAY700};
`;
