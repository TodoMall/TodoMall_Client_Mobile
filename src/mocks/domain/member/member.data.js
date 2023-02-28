import dayjs from "dayjs";

import { PROCESS_STATUS } from "../../../constants";

const formattedDay = dayjs()
    .add(1, "day")
    .startOf("day")
    .format("YYYY-MM-DD HH:mm:ss");

//  PROCESS_STATUS Waiting , Success 언제 사용되는지 물어보기

export const subscribeProductList = {
    getMemberById: [
        {
            subscribeProducts: [
                {
                    id: 1,
                    status: PROCESS_STATUS.PROCESS,
                    retryCount: 2,
                    sessions: [
                        {
                            id: 1,
                            status: PROCESS_STATUS.PROCESS,
                            title: "투두몰에서 클래스 다운받기",
                            missionTitle: "투두리스트 따라하고 성장하기",
                            expireDate: dayjs(formattedDay)
                                .subtract(6, "hour")
                                .subtract(23, "minutes")
                                .subtract(38, "seconds")
                                .format("YYYY-MM-DD HH:mm:ss"),
                            todos: [
                                {
                                    id: 1,
                                    status: PROCESS_STATUS.PROCESS,
                                },
                                {
                                    id: 2,
                                    status: PROCESS_STATUS.WAITING,
                                },
                                {
                                    id: 3,
                                    status: PROCESS_STATUS.WAITING,
                                },
                                {
                                    id: 4,
                                    status: PROCESS_STATUS.WAITING,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    status: PROCESS_STATUS.PROCESS,
                    retryCount: 2,
                    sessions: [
                        {
                            id: 2,
                            status: PROCESS_STATUS.PROCESS,
                            title: "투두몰에서 클래스 다운받기",
                            missionTitle: "투두리스트 따라하고 성장하기",
                            expireDate: dayjs(formattedDay)
                                .add(1, "day")
                                .format("YYYY-MM-DD HH:mm:ss"),
                            todos: [
                                {
                                    id: 1,
                                    status: PROCESS_STATUS.SUCCESS,
                                },
                                {
                                    id: 2,
                                    status: PROCESS_STATUS.PROCESS,
                                },
                                {
                                    id: 3,
                                    status: PROCESS_STATUS.WAITING,
                                },
                                {
                                    id: 4,
                                    status: PROCESS_STATUS.WAITING,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 3,
                    status: PROCESS_STATUS.PROCESS,
                    retryCount: 2,
                    sessions: [
                        {
                            id: 3,
                            status: PROCESS_STATUS.PROCESS,
                            title: "투두몰에서 클래스 다운받기",
                            missionTitle: "투두리스트 따라하고 성장하기",
                            expireDate: dayjs(formattedDay)
                                .add(7, "day")
                                .format("YYYY-MM-DD HH:mm:ss"),
                            todos: [
                                {
                                    id: 1,
                                    status: PROCESS_STATUS.SUCCESS,
                                },
                                {
                                    id: 2,
                                    status: PROCESS_STATUS.SUCCESS,
                                },
                                {
                                    id: 3,
                                    status: PROCESS_STATUS.SUCCESS,
                                },
                                {
                                    id: 4,
                                    status: PROCESS_STATUS.SUCCESS,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 4,
                    status: PROCESS_STATUS.PROCESS,
                    retryCount: 2,
                    sessions: [
                        {
                            id: 4,
                            status: PROCESS_STATUS.PROCESS,
                            title: "투두몰에서 클래스 다운받기",
                            missionTitle: "투두리스트 따라하고 성장하기",
                            expireDate: dayjs(formattedDay)
                                .add(8, "day")
                                .format("YYYY-MM-DD HH:mm:ss"),
                            todos: [
                                {
                                    id: 1,
                                    status: PROCESS_STATUS.SUCCESS,
                                },
                                {
                                    id: 2,
                                    status: PROCESS_STATUS.PROCESS,
                                },
                                {
                                    id: 3,
                                    status: PROCESS_STATUS.WAITING,
                                },
                                {
                                    id: 4,
                                    status: PROCESS_STATUS.WAITING,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 5,
                    status: PROCESS_STATUS.FAIL,
                    retryCount: 2,
                    sessions: [
                        {
                            id: 5,
                            status: PROCESS_STATUS.PROCESS,
                            title: "투두몰에서 클래스 다운받기",
                            missionTitle: "투두리스트 따라하고 성장하기",
                            expireDate: dayjs(formattedDay)
                                .subtract(2, "day")
                                .format("YYYY-MM-DD HH:mm:ss"),
                            todos: [
                                {
                                    id: 1,
                                    status: PROCESS_STATUS.FAIL,
                                },
                                {
                                    id: 2,
                                    status: PROCESS_STATUS.WAITING,
                                },
                                {
                                    id: 3,
                                    status: PROCESS_STATUS.WAITING,
                                },
                                {
                                    id: 4,
                                    status: PROCESS_STATUS.WAITING,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 6,
                    status: PROCESS_STATUS.FAIL,
                    retryCount: 0,
                    sessions: [
                        {
                            id: 6,
                            status: PROCESS_STATUS.PROCESS,
                            title: "투두몰에서 클래스 다운받기",
                            missionTitle: "투두리스트 따라하고 성장하기",
                            expireDate: dayjs(formattedDay)
                                .subtract(2, "day")
                                .format("YYYY-MM-DD HH:mm:ss"),
                            todos: [
                                {
                                    id: 1,
                                    status: PROCESS_STATUS.FAIL,
                                },
                                {
                                    id: 2,
                                    status: PROCESS_STATUS.WAITING,
                                },
                                {
                                    id: 3,
                                    status: PROCESS_STATUS.WAITING,
                                },
                                {
                                    id: 4,
                                    status: PROCESS_STATUS.WAITING,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
