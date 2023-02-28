import dayjs from "dayjs";

import { PROCESS_STATUS } from "../../../constants";
import {
    BasicCard,
    CertificationCard,
    FailCard,
    RetryCard,
    UrgentCard,
} from "./SessionCard";

const SessionCardList = ({ courseId, retryCount, sessions }) => {
    const { PROCESS, WAITING } = PROCESS_STATUS;

    const fotmattedSessionList = sessions.find(
        session => session.status === PROCESS
    );
    const unfinishedTodos = fotmattedSessionList.todos.filter(
        todo => todo.status === PROCESS || todo.status === WAITING
    );

    const isToday = dayjs()
        .startOf("day")
        .isSame(dayjs(fotmattedSessionList.expireDate).startOf("day"));

    const isOverDeadline = dayjs()
        .startOf("day")
        .isAfter(dayjs(fotmattedSessionList.expireDate).startOf("day"));

    const fotmattedExpireDate = dayjs(fotmattedSessionList.expireDate).format(
        "M월 DD일 0시까지"
    );

    if (isOverDeadline && retryCount > 0) {
        return (
            <RetryCard
                title={fotmattedSessionList.title}
                missionTitle={fotmattedSessionList.missionTitle}
            />
        );
    }
    if (isOverDeadline && retryCount === 0) {
        return (
            <FailCard
                title={fotmattedSessionList.title}
                missionTitle={fotmattedSessionList.missionTitle}
            />
        );
    }
    if (isToday) {
        return (
            <UrgentCard
                courseId={courseId}
                sessionId={fotmattedSessionList.id}
                todoId={unfinishedTodos[0]?.id}
                title={fotmattedSessionList.title}
                missionTitle={fotmattedSessionList.missionTitle}
                fotmattedExpireDate={fotmattedExpireDate}
            />
        );
    }
    if (!isToday && unfinishedTodos.length > 0) {
        return (
            <BasicCard
                courseId={courseId}
                sessionId={fotmattedSessionList.id}
                todoId={unfinishedTodos[0]?.id}
                title={fotmattedSessionList.title}
                missionTitle={fotmattedSessionList.missionTitle}
                unfinishedTodos={unfinishedTodos.length}
                fotmattedExpireDate={fotmattedExpireDate}
            />
        );
    }
    if (unfinishedTodos.length === 0) {
        return (
            <CertificationCard
                courseId={courseId}
                sessionId={fotmattedSessionList.id}
                title={fotmattedSessionList.title}
                missionTitle={fotmattedSessionList.missionTitle}
                fotmattedExpireDate={fotmattedExpireDate}
            />
        );
    }
};
export default SessionCardList;
