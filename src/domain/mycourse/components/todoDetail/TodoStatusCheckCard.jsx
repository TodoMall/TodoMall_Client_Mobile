import styled from "styled-components";

import { COLOR } from "../../../../constants";
import { RowBox } from "../../../../mds/box";
import { BasicButton, CheckButton } from "../../../../mds/button";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../../mds/text";

const TodoStatusCheckCard = ({
    taskTitle,
    isLastTodo,
    isAlreadyCompleted,
    isTodoCompleteChecked,
    onClick: handleClick,
    onNext: handleNextTodo,
    onMissionCertification: handleMissionCertification,
}) => {
    const buttonColor = isTodoCompleteChecked
        ? COLOR.BRAND_COLOR
        : COLOR.GRAY200;

    const handleTodoDone = () => {
        if (isLastTodo) {
            handleMissionCertification();
        }
        if (!isLastTodo) {
            handleNextTodo();
        }
    };

    return (
        <Container>
            <HeadingXL>투두 완료하기</HeadingXL>
            <BodyM margin={"0.5rem 0"}>
                활동 완료를 체크하고, 하단 버튼을 클릭해주세요.
            </BodyM>
            <CheckBoxColumnWrapper>
                <RowBox justifyContent="flex-start">
                    {!isAlreadyCompleted && (
                        <CheckButton
                            isChecked={isTodoCompleteChecked}
                            onClick={handleClick}
                        />
                    )}
                    {isAlreadyCompleted && (
                        <CheckButton
                            checkedColor={COLOR.GRAY500}
                            isChecked={true}
                        />
                    )}
                    <BodyL margin={"0 0 0 0.5rem"}>{taskTitle}</BodyL>
                </RowBox>
            </CheckBoxColumnWrapper>

            {!isAlreadyCompleted && (
                <BasicButton
                    margin={"1rem 0"}
                    isDisabled={!isTodoCompleteChecked}
                    onClick={handleTodoDone}
                    backgroundColor={buttonColor}
                >
                    <BodyXL fontColor={COLOR.WHITE}>
                        {isLastTodo ? "미션 인증하기" : "다음 투두로 넘어가기"}
                    </BodyXL>
                </BasicButton>
            )}

            {isAlreadyCompleted && (
                <BasicButton
                    margin={"1rem 0"}
                    isDisabled={true}
                    backgroundColor={COLOR.GRAY500}
                >
                    <BodyXL fontColor={COLOR.WHITE}>
                        이미 완료한 투두입니다
                    </BodyXL>
                </BasicButton>
            )}
        </Container>
    );
};

export default TodoStatusCheckCard;

const Container = styled.div``;
const CheckBoxColumnWrapper = styled.div`
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 1.25rem;
    background-color: ${COLOR.GRAY50};
`;
