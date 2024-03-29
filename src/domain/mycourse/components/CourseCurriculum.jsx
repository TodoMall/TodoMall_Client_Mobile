import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH, PROCESS_STATUS } from "../../../constants";
import { Card, DetailBoxCoulmn } from "../../../mds";
import { BasicHeader } from "../../../mds/layout/mobile/headers";
import { BodyL, HeadingXL } from "../../../mds/text";

const CourseCurriculum = ({
    subscribeProduct,
    subscribeSession,
    onClose: handleClose = () => {},
}) => {
    const { WAITING, FAIL } = PROCESS_STATUS;

    const navigate = useNavigate();
    const { courseId: subCourseId, sessionId: subSessionId } = useParams();

    const sortedSessions = subscribeProduct.sessions
        .slice()
        .sort((a, b) => a.orderBy - b.orderBy);

    const handleOtherTodoDetailPage = subTodoId => {
        navigate(
            `${PATH.TODO_DETAIL}/${subCourseId}/${subSessionId}/${subTodoId}`
        );
        handleClose();
    };

    return (
        <>
            <BasicHeader
                pageDescription={subscribeSession?.title}
                onClick={handleClose}
            />
            <Container>
                {sortedSessions.map((session, idx) => {
                    const sortedTodos = session.todos
                        .slice()
                        .sort((a, b) => a.orderBy - b.orderBy);
                    return (
                        <Card key={idx}>
                            <BodyL fontColor={COLOR.GRAY700}>
                                {idx + 1}번째 세션
                            </BodyL>
                            <HeadingXL margin={"0.25rem 0 0.5rem"}>
                                {session?.title}
                            </HeadingXL>
                            {sortedTodos.map((todo, idx) => {
                                if (
                                    session?.status === WAITING ||
                                    session?.status === FAIL
                                ) {
                                    return (
                                        <BodyL
                                            key={idx}
                                            fontColor={COLOR.GRAY300}
                                            margin={"0.75rem 0"}
                                        >
                                            {todo?.title}
                                        </BodyL>
                                    );
                                } else {
                                    return (
                                        <DetailBoxCoulmn
                                            key={idx}
                                            onClick={() =>
                                                handleOtherTodoDetailPage(
                                                    todo.id
                                                )
                                            }
                                        >
                                            <BodyL>{todo?.title}</BodyL>
                                        </DetailBoxCoulmn>
                                    );
                                }
                            })}
                        </Card>
                    );
                })}
            </Container>
        </>
    );
};
export default CourseCurriculum;
const Container = styled.div`
    padding: 0 1rem;
    p {
        width: 100%;
    }
`;
