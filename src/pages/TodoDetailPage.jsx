import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getTodoDetailByMemberId } from "../apollo/domain/member";
import { COLOR, PATH } from "../constants";
import { PROCESS_STATUS } from "../constants/processStatus";
import CourseCurriculum from "../domain/mycourse/components/CourseCurriculum";
import { useToggle } from "../hooks";
import { CustomViewer } from "../mds";
import { RowBox } from "../mds/box";
import { BasicButton, CheckButton } from "../mds/button";
import { SessionBasicIcon } from "../mds/icon";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../mds/text";

// /mycourse/detail/todo?courseId=bbad2994-71c1-4871-8ae7-aad168d8dfe5sessionId=e08166a0-df65-4b0b-b57c-35e3e47fd36etodoId=767325d3-1158-4b0f-9cf0-af3ce418bc70

// /mycourse/detail/todo/bbad2994-71c1-4871-8ae7-aad168d8dfe5/e08166a0-df65-4b0b-b57c-35e3e47fd36e/767325d3-1158-4b0f-9cf0-af3ce418bc70

const TodoDetailPage = () => {
    const { SUCCESS, WAITING, FAIL } = PROCESS_STATUS;

    const navigate = useNavigate();
    const { sessionId, todoId } = useParams();

    const [currentProduct, setCurrentProduct] = useState();
    const [currentTodo, setCurrentTodo] = useState();
    const [currentSession, setCurrentSession] = useState();
    const [isLastTodo, setIsLastTodo] = useState(false);
    const [isAlreadyCompleted, setIsAlreadyCompleted] = useState(false);

    const [isTodoCompleteChecked, _, handleTodoCompleteChecked] =
        useToggle(false);
    const [isShowCurriculum, __, handleToggle] = useToggle();
    // const [isShowCurriculum, handleOpen, handleClose] = usePopup();

    const handleBestPracticePage = () => navigate(PATH.TODO_DETAIL_BEST);

    const { data } = useQuery(getTodoDetailByMemberId, {
        variables: {
            id: "e155ad7c-3547-4312-b09c-b3729c0b18c3",
        },
        onCompleted: data => {
            setCurrentProduct(data.getMemberById.subscribeProducts);

            /*
            FIXME : add orderBy column in subscribeSession
            */
            const formattedSession =
                data.getMemberById.subscribeProducts[0].sessions.find(
                    session => session.id === sessionId
                );

            /*
            FIXME : add orderBy column in subscribeTodo
            const [sortedLastTodo] = formattedSession.todos.sort(
                (a, b) => b.orderBy - a.orderBy
            );
            setIsLastTodo(
                sortedLastTodo.orderBy + 1 === formattedSession.todos.length
            );
            */
            setCurrentSession(formattedSession);
            setCurrentTodo(
                formattedSession.todos.find(todo => todo.id === todoId)
            );
        },
        onError: error => console.error(error),
    });

    return (
        <>
            {isShowCurriculum && (
                // TODO : 만약 아래/위/왼/오 에서 스르륵 나오게 하고싶다면 https://v4.mui.com/components/drawers/ 참고
                <CourseCurriculum
                    product={currentProduct}
                    session={currentSession}
                    onToggle={handleToggle}
                />
            )}
            {!isShowCurriculum && (
                <>
                    <BasicHeader
                        pageDescription={currentTodo?.title}
                        hasListButton={true}
                        onList={handleToggle}
                    />
                    <Container>
                        {currentTodo && (
                            <CustomViewer initialValue={currentTodo.body} />
                        )}
                        <BestPracticesGuideBox>
                            <RowBox justifyContent="flex-start">
                                <SessionBasicIcon color={COLOR.SUCCESS500} />
                                <BodyL
                                    margin={"0 0 0 0.25rem"}
                                    fontColor={COLOR.SUCCESS500}
                                >
                                    도움말
                                </BodyL>
                            </RowBox>
                            <HeadingXL>{currentTodo?.title}</HeadingXL>
                            <BodyM>
                                지금까지의 과정을 잘 따랐는지 알고싶다면?
                            </BodyM>
                            <ButtonWrapper>
                                <BasicButton
                                    width={"51%"}
                                    onClick={handleBestPracticePage}
                                    backgroundColor={COLOR.SUCCESS500}
                                >
                                    <BodyXL fontColor={COLOR.WHITE}>
                                        모범예시 보러가기
                                    </BodyXL>
                                </BasicButton>
                            </ButtonWrapper>
                        </BestPracticesGuideBox>

                        <HeadingXL>투두 완료하기</HeadingXL>
                        <BodyM margin={"0.5rem 0"}>
                            활동 완료를 체크하고, 하단 버튼을 클릭해주세요.
                        </BodyM>
                        <CheckBoxColumnWrapper>
                            <RowBox>
                                {!isAlreadyCompleted && (
                                    <CheckButton
                                        isChecked={isTodoCompleteChecked}
                                        onClick={handleTodoCompleteChecked}
                                    />
                                )}
                                {isAlreadyCompleted && (
                                    <CheckButton
                                        checkedColor={COLOR.GRAY500}
                                        isChecked={true}
                                        onClick={() => null}
                                    />
                                )}
                                <BodyL>{currentTodo?.taskTitle}</BodyL>
                            </RowBox>
                        </CheckBoxColumnWrapper>
                        {!isAlreadyCompleted && (
                            <BasicButton
                                margin={"1rem 0"}
                                isDisabled={!isTodoCompleteChecked}
                                backgroundColor={
                                    isTodoCompleteChecked
                                        ? COLOR.BRAND_COLOR
                                        : COLOR.GRAY200
                                }
                            >
                                <BodyXL fontColor={COLOR.WHITE}>
                                    {isLastTodo
                                        ? "다음 투두로 넘어가기"
                                        : "미션 인증하기"}
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
                </>
            )}
        </>
    );
};
export default TodoDetailPage;

const Container = styled.div`
    padding: 0.75rem 1rem;
`;

const CheckBoxColumnWrapper = styled.div`
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 1.25rem;
    background-color: ${COLOR.GRAY50};
`;

const BestPracticesGuideBox = styled.div`
    margin: 2rem 0;
    padding: 1rem 1.25rem;
    border-radius: 1.25rem;
    background-color: ${COLOR.GRAY50};
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;