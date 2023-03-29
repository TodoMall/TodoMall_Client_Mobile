import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useMutation, useQuery } from "@apollo/client";

import { getTodoDetailByMemberId } from "../apollo/domain/member";
import { updateSubscribeTodoState } from "../apollo/domain/mycourse";
import { PATH, PROCESS_STATUS } from "../constants";
import { CourseCurriculum } from "../domain/mycourse/components";
import {
    BestPracticesGuideBox,
    TodoStatusCheckCard,
} from "../domain/mycourse/components/todoDetail";
import { usePopup, useToggle } from "../hooks";
import { CustomViewer } from "../mds";
import { BasicHeader } from "../mds/layout/mobile/headers";

const TodoDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { USER_ID = "56167553-ab6f-4d8f-8c81-f402988e9be1" } = {
        ...localStorage,
    };
    const {
        courseId: subCourseId,
        sessionId: subSessionId,
        todoId: subTodoId,
    } = useParams();

    const [subscribeProduct, setSubscribeProduct] = useState();
    const [subscribeSession, setSubscribeSession] = useState();
    const [subscribeTodo, setSubscribeTodo] = useState();
    const [product, setProduct] = useState();
    const [session, setSession] = useState();
    const [todo, setTodo] = useState();
    const [isLastTodo, setIsLastTodo] = useState(false);

    const [isAlreadyCompleted, setIsAlreadyCompleted] = useState(false);
    const [isTodoCompleteChecked, _, handleTodoCompleteChecked] =
        useToggle(false);

    const [isShowCurriculum, handleOpen, handleClose] = usePopup();

    const [updateTodoStatus] = useMutation(updateSubscribeTodoState, {
        variables: {
            memberId: USER_ID,
            subscribeProductId: subCourseId,
            subscribeSessionId: subSessionId,
            subscribeTodoId: subTodoId,
        },
    });

    const { refetch } = useQuery(getTodoDetailByMemberId, {
        variables: {
            id: USER_ID,
        },
        onCompleted: data => {
            const subscribeProduct = data.getMemberById.subscribeProducts.find(
                product => product.id === subCourseId
            );
            const subscribeSession = subscribeProduct.sessions.find(
                session => session.id === subSessionId
            );
            const subscribeTodo = subscribeSession.todos.find(
                todo => todo.id === subTodoId
            );
            setSubscribeProduct(subscribeProduct);
            setSubscribeSession(subscribeSession);
            setSubscribeTodo(subscribeTodo);

            setIsAlreadyCompleted(
                subscribeTodo.status === PROCESS_STATUS.SUCCESS
            );
            setIsLastTodo(
                subscribeTodo.orderBy + 1 === subscribeSession.todos.length
            );

            const findInSession = subscribeProduct.product.sessions.find(
                session => session.orderBy === subscribeSession.orderBy
            );
            const findInTodo = findInSession.todos.find(
                todo => todo.orderBy === subscribeTodo.orderBy
            );
            setProduct(subscribeProduct.product);
            setSession(findInSession);
            setTodo(findInTodo);
        },
        onError: error => console.error(error),
    });
    const reloadData = async () => await refetch();

    const handleNextTodo = async () => {
        const { id } = subscribeSession.todos[subscribeTodo?.orderBy + 1];
        await updateTodoStatus();
        navigate(`${PATH.TODO_DETAIL}/${subCourseId}/${subSessionId}/${id}`);
    };

    const handleMissionCertification = () => {
        navigate(
            `${PATH.MISSION_CERTIFICATION}/${subCourseId}/${subSessionId}/${subTodoId}`
        );
    };

    const handleBestPractice = () => {
        navigate(
            `${PATH.TODO_DETAIL_BEST}/${product?.id}/${session?.id}/${todo?.id}`
        );
    };

    useEffect(() => {
        console.log("reloadData");
        reloadData();
    }, [location.pathname]);

    return (
        <>
            <BasicHeader
                pageDescription={subscribeTodo?.title}
                hasListButton={true}
                onList={handleOpen}
            />

            <Container>
                {subscribeTodo && (
                    <CustomViewer initialValue={subscribeTodo.body} />
                )}

                <BestPracticesGuideBox
                    todo={subscribeTodo}
                    onClick={handleBestPractice}
                />

                <TodoStatusCheckCard
                    productId={product?.id}
                    taskTitle={todo?.taskTitle}
                    isLastTodo={isLastTodo}
                    isAlreadyCompleted={isAlreadyCompleted}
                    isTodoCompleteChecked={isTodoCompleteChecked}
                    onClick={handleTodoCompleteChecked}
                    onNext={handleNextTodo}
                    onMissionCertification={handleMissionCertification}
                />
            </Container>

            {isShowCurriculum && (
                <Drawer
                    open={isShowCurriculum}
                    onClose={handleClose}
                    variant="temporary"
                    anchor={"bottom"}
                >
                    <CourseCurriculum
                        onClose={handleClose}
                        product={subscribeProduct}
                        session={subscribeSession}
                    />
                </Drawer>
            )}
        </>
    );
};
export default TodoDetailPage;

const Container = styled.div`
    padding: 0.75rem 1rem;
`;
