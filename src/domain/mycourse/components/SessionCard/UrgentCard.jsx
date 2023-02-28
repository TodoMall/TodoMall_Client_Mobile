import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH } from "../../../../constants";
import { Card } from "../../../../mds";
import { RowBox } from "../../../../mds/box";
import { BasicButton } from "../../../../mds/button";
import { WarningIcon } from "../../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../../mds/text";

const UrgentCard = ({
    courseId,
    sessionId,
    todoId,
    title,
    missionTitle,
    fotmattedExpireDate,
}) => {
    const navigate = useNavigate();

    const handleTodoDetail = () => {
        navigate(PATH.TODO_DETAIL(courseId, sessionId, todoId));
    };
    return (
        <Card backgroundColor={COLOR.GRAY50}>
            <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                <WarningIcon />
                <BodyL fontColor={COLOR.ERROR500} margin={"0 0 0 0.25rem"}>
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
                        인증 마감까지
                    </BodyL>
                    <BodyL fontColor={COLOR.ERROR500} margin={"0 0.25rem 0 0"}>
                        {"17:36:22"}
                    </BodyL>
                </RowBox>
                <BasicButton
                    width={"auto"}
                    margin={"0.5rem 0 0 0"}
                    backgroundColor={COLOR.ERROR500}
                    onClick={handleTodoDetail}
                >
                    <BodyXL fontColor={COLOR.WHITE}>바로 학습</BodyXL>
                </BasicButton>
            </RowBox>
        </Card>
    );
};
export default UrgentCard;

const TextContainer = styled.div`
    margin: 0.25rem 0 0.5rem 0;
    width: 100%;
`;
