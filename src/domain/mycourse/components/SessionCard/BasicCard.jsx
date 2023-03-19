import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH } from "../../../../constants";
import { Card } from "../../../../mds";
import { RowBox } from "../../../../mds/box";
import { BasicButton } from "../../../../mds/button";
import { SessionBasicIcon } from "../../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../../mds/text";

const BasicCard = ({
    courseId,
    sessionId,
    todoId,
    title,
    missionTitle,
    fotmattedExpireDate,
    unfinishedTodos,
}) => {
    const navigate = useNavigate();

    const handleTodoDetail = () => {
        navigate(`${PATH.TODO_DETAIL}/${courseId}/${sessionId}/${todoId}`);
    };

    return (
        <Card backgroundColor={COLOR.GRAY50}>
            <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                <SessionBasicIcon />
                <BodyL fontColor={COLOR.GRAY500} margin={"0 0 0 0.25rem"}>
                    {fotmattedExpireDate}
                </BodyL>
            </RowBox>
            <TextContainer>
                <HeadingXL>{title}</HeadingXL>
                <BodyM>{missionTitle}</BodyM>
            </TextContainer>
            <RowBox>
                <RowBox
                    margin={"0.5rem 0 0 0"}
                    width={"auto"}
                    justifyContent={"flex-start"}
                >
                    <BodyL fontColor={COLOR.GRAY700} margin={"0 0.25rem 0 0"}>
                        인증까지
                    </BodyL>
                    <BodyL fontColor={COLOR.BRAND_COLOR}>
                        {unfinishedTodos}개의 투두
                    </BodyL>
                </RowBox>
                <BasicButton
                    width={"auto"}
                    margin={"0.5rem 0 0 0"}
                    backgroundColor={COLOR.BRAND_COLOR}
                    onClick={handleTodoDetail}
                >
                    <BodyXL fontColor={COLOR.WHITE}>바로 학습</BodyXL>
                </BasicButton>
            </RowBox>
        </Card>
    );
};
export default BasicCard;

const TextContainer = styled.div`
    margin: 0.25rem 0 0.5rem 0;
    width: 100%;
`;
