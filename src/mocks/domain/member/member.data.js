import dayjs from "dayjs";

import { ORDER_STATE, PROCESS_STATUS } from "../../../constants";

const formattedDay = dayjs();

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
                            expireDate: "2023-03-01 17:54:44",
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

export const paidProductList = {
    getOrderByMemberId: [
        {
            id: 3,
            state: ORDER_STATE.SUCCESS,
            product: {
                thumbnailUrl: "/image/demo_main_01_3.png",
            },
            member: {
                subscribeProducts: {
                    title: "스티비로 뉴스레터 발행하기",
                    status: PROCESS_STATUS.WAITING,
                    retryCount: 1,
                    createdAt: "2023-03-01T07:29:10.260933",
                },
            },
        },
        {
            id: 4,
            state: ORDER_STATE.SUCCESS,
            product: {
                thumbnailUrl: "/image/demo_main_01_4.png",
            },
            member: {
                subscribeProducts: {
                    title: "단계별 보고서 작성법 습득하기",
                    status: PROCESS_STATUS.WAITING,
                    retryCount: 0,
                    createdAt: "2023-02-28T07:29:10.260933",
                },
            },
        },
        {
            id: 1,
            state: ORDER_STATE.SUCCESS,
            product: {
                thumbnailUrl: "/image/demo_main_01_1.png",
            },
            member: {
                subscribeProducts: {
                    title: "노션으로 포트폴리오 만들기",
                    status: PROCESS_STATUS.PROCESS,
                    retryCount: 2,
                    createdAt: "2023-03-03T07:29:10.260933",
                },
            },
        },
        {
            id: 5,
            state: ORDER_STATE.SUCCESS,
            product: {
                thumbnailUrl: "/image/demo_main_01_5.png",
            },
            member: {
                subscribeProducts: {
                    title: "튜토리얼",
                    status: PROCESS_STATUS.SUCCESS,
                    retryCount: 0,
                    createdAt: "2023-02-26T07:29:10.260933",
                },
            },
        },
        {
            id: 2,
            state: ORDER_STATE.SUCCESS,
            product: {
                thumbnailUrl: "/image/demo_main_01_2.png",
            },
            member: {
                subscribeProducts: {
                    title: "깃허브로 실무 개발 능력 쌓기",
                    status: PROCESS_STATUS.SUCCESS,
                    retryCount: 2,
                    createdAt: "2023-03-02T07:29:10.260933",
                },
            },
        },
    ],
};
