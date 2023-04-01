import dayjs from "dayjs";

import { PROCESS_STATUS } from "../../../constants";
import {
    BasicCard,
    CertificationCard,
    FailCard,
    RetryCard,
    UrgentCard,
} from "./SessionCard";

const SessionCardList = ({ subscribeProduct, onRefetch }) => {
    const { PROCESS, FAIL, WAITING } = PROCESS_STATUS;

    const fotmattedSessionList = subscribeProduct?.sessions.find(
        session => session.status === PROCESS || session.status === FAIL
    );

    const lastRetryCount =
        subscribeProduct?.product.retryCount - subscribeProduct?.retryCount;

    const unfinishedTodos = fotmattedSessionList?.todos?.filter(
        todo => todo.status === PROCESS
    );

    const isToday = dayjs()
        .startOf("day")
        .isSame(dayjs(fotmattedSessionList?.expireDate).startOf("day"));

    const isOverDeadline = dayjs()
        .startOf("day")
        .isAfter(dayjs(fotmattedSessionList?.expireDate).startOf("day"));

    const fotmattedExpireDate = dayjs(fotmattedSessionList?.expireDate).format(
        "M월 DD일 0시까지"
    );

    if (isOverDeadline && lastRetryCount > 0) {
        return (
            <RetryCard
                subscribeProductId={subscribeProduct?.id}
                title={fotmattedSessionList?.title}
                missionTitle={fotmattedSessionList?.missionTitle}
                onRefetch={onRefetch}
            />
        );
    }

    if (isOverDeadline && lastRetryCount === 0) {
        return (
            <FailCard
                subscribeProductId={subscribeProduct?.id}
                title={fotmattedSessionList?.title}
                missionTitle={fotmattedSessionList?.missionTitle}
                onRefetch={onRefetch}
            />
        );
    }

    if (isToday) {
        return (
            <UrgentCard
                courseId={subscribeProduct?.id}
                sessionId={fotmattedSessionList?.id}
                todoId={unfinishedTodos[0]?.id}
                title={fotmattedSessionList?.title}
                missionTitle={fotmattedSessionList?.missionTitle}
                expireDate={fotmattedSessionList?.expireDate}
                fotmattedExpireDate={fotmattedExpireDate}
            />
        );
    }

    if (!isToday && unfinishedTodos.length > 0) {
        return (
            <BasicCard
                courseId={subscribeProduct?.id}
                sessionId={fotmattedSessionList.id}
                todoId={unfinishedTodos[0]?.id}
                title={fotmattedSessionList?.title}
                missionTitle={fotmattedSessionList?.missionTitle}
                unfinishedTodos={unfinishedTodos.length}
                fotmattedExpireDate={fotmattedExpireDate}
            />
        );
    }

    if (unfinishedTodos.length === 0) {
        return (
            <CertificationCard
                courseId={subscribeProduct?.id}
                sessionId={fotmattedSessionList.id}
                title={fotmattedSessionList?.title}
                missionTitle={fotmattedSessionList?.missionTitle}
                fotmattedExpireDate={fotmattedExpireDate}
            />
        );
    }
};
export default SessionCardList;
