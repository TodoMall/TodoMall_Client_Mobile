import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getTodoBestPracticeByProductId } from "../apollo/domain/mycourse";
import { usePopup } from "../hooks";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { PopUpLayout } from "../mds/popup";
import { BodyXXL } from "../mds/text";

const TodoBestPractice = () => {
    const { courseId, sessionId, todoId } = useParams();

    const [product, setProduct] = useState();
    const [currentTodo, setCurrentTodo] = useState();
    const [isShowing, handleOpen, handleClose] = usePopup(false);

    const { data } = useQuery(getTodoBestPracticeByProductId, {
        variables: { id: courseId },
        onCompleted: data => {
            setProduct(data.getProductById);
            const currentSession = data.getProductById.sessions.find(
                session => session.id === sessionId
            );
            setCurrentTodo(
                currentSession.todos.find(todo => todo.id === todoId)
            );
        },
    });

    return (
        <>
            <BasicHeader pageDescription={"모범 예시"} />
            <Container>
                <BodyXXL>
                    {product?.creator.name} {product?.creator.job}님이 등록하신
                    {currentTodo?.title}의 모범예시예요.
                </BodyXXL>
                <Picture
                    src={currentTodo?.bestPracticeImageUrl}
                    onClick={handleOpen}
                />
                {isShowing && (
                    <PopUpLayout onClick={handleClose}>
                        <Picture src={currentTodo?.bestPracticeImageUrl} />
                    </PopUpLayout>
                )}
            </Container>
        </>
    );
};
export default TodoBestPractice;
const Container = styled.div`
    padding: 0.75rem 1rem;
`;

const Picture = styled.img`
    width: 100%;
    margin-top: 1.875rem;
    border-radius: 1.25rem;
    &:hover {
        transform: scale(1);
        transition: transform 0.3s ease;
    }
`;
