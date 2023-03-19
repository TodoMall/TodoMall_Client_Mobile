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
                            expireDate: "2023-03-09 23:00:00",
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

export const getTodoDetailByMemberIdOutput = {
    getMemberById: {
        subscribeProducts: {
            id: "492a2191-094a-4e04-93a5-48a8ddd18079",
            creator: {
                name: "김상혁",
                job: "개발자",
            },
            sessions: [
                {
                    id: "c19fa791-d0cf-4363-8195-95d0b407b677",
                    title: "환경 구축",
                    status: PROCESS_STATUS.SUCCESS,
                    missionTitle: "구축한 DB 인증하기",
                    todos: [
                        {
                            id: "1314c594-a399-4d15-88ee-0a8b1677570c",
                            title: "핵심 파악하기",
                            status: PROCESS_STATUS.SUCCESS,
                            orderBy: 0,
                            taskTitle:
                                "가이드에서 설명하려는 내용을 한 문장으로 요약하기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/방향_설정/핵심_파악하기/image_bestPractice.png",
                        },
                        {
                            id: "4e1393f8-f9f3-4e22-8d7a-0d966c8da4c7",
                            title: "스토리라인 설정하기",
                            status: PROCESS_STATUS.SUCCESS,
                            orderBy: 1,
                            taskTitle:
                                "본인이 A팀장이라고 생각하고 스토리라인 작성하기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/방향_설정/스토리라인_설정하기/image_bestPractice.png",
                        },
                        {
                            id: "b1c8070b-f808-4694-9274-9b89855d4658",
                            title: "스케줄 표 작성하기",
                            status: PROCESS_STATUS.SUCCESS,
                            orderBy: 2,
                            taskTitle:
                                "업무 진행에 필요한 자신만의 스케줄 표 만들기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/방향_설정/스케줄_표_작성하기/image_bestPractice.png",
                        },
                        {
                            id: "f5273ef4-91ce-4086-82d6-4aa3f4ea16e6",
                            title: "작성 툴 선택하기",
                            status: PROCESS_STATUS.SUCCESS,
                            orderBy: 3,
                            taskTitle:
                                "본인이 자신 있게 다룰 수 있는 툴 적어보기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/방향_설정/작성_툴_선택하기/image_bestPractice.png",
                        },
                    ],
                },
                {
                    id: "65cc2e7c-d73f-48a6-9952-70d9913379bb",
                    title: "로그인과 피드 페이지",
                    status: PROCESS_STATUS.PROCESS,
                    missionTitle: "피드 페이지 완성하기",
                    todos: [
                        {
                            id: "a59fd8a6-4196-4683-994d-54424d123862",
                            title: "빅데이터 활용하기",
                            status: PROCESS_STATUS.SUCCESS,
                            orderBy: 0,
                            taskTitle:
                                "썸트렌드에 접속하여 '보고서'라는 단어 검색하기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/자료_수집/빅데이터_활용하기/image_bestPractice.png",
                        },
                        {
                            id: "3449dd06-7e62-4c0b-81c6-8043f7a15e82",
                            title: "관련 커뮤니티 활용하기",
                            status: PROCESS_STATUS.SUCCESS,
                            orderBy: 1,
                            taskTitle:
                                "업무와 연관성이 있는 커뮤니티를 찾아 즐겨찾기하기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/자료_수집/관련_커뮤니티_활용하기/image_bestPractice.png",
                        },
                        {
                            id: "08c503a7-0887-4012-9481-9c891c5f3f07",
                            title: "데이터 창고 활용하기",
                            status: PROCESS_STATUS.PROCESS,
                            orderBy: 2,
                            taskTitle:
                                "평소 자료를 보관하는 주된 저장 매체 적어보기",
                            body: "",
                            // body: '<h1 id="deliver-">Deliver 단계</h1> <p> 서비스가 어떤 가치를 제공할지 정의했으니, 이제 <strong>핵심 가치를 전달할 서비스를 구체화하는 “Deliver” 단계</strong>가 시작됩니다. 이 단계에서 다양한 기획 문서를 제작해서 서비스를 구체화하고, 해당 문서는 디자인팀과 개발팀에게 전달됩니다. 대표적으로 <strong>IA, 플로우 차트, 화면 설계안</strong>이 있습니다. </p> <code>{텍스트명}</code>  <br/>  <a>{텍스트명}</a><p><img src="/image/demo_main_01_1.png" alt="https://minio.todomall.app/course/IT_서비스_전과정_기획하기/기획_문서_작성/IA_설계하기/image_0.png"></p> <h1 id="ia">IA</h1> <p> <strong>IA는 정보 아키텍처(Information Architecture)로, 서비스의 구조</strong>를 나타냅니다.  IA를 작성하면, 서비스의 전반적인 구조를 한눈에 파악할 수 있고 페이지 사이의 상하 구조를 명확히 정의할 수 있습니다. IA는 디자이너와 개발자 협업에서도 필수적입니다. 기획 과정에 참여하지 않은 디자이너와 개발자도 잘 짜여진 IA를 본다면, 서비스의 전체 구조를 빠르게 파악할 수 있습니다. </p> <p> IA는 <strong>페이지 단위로 설계해야 하며, 필요한 경우에 기능이나 컴포넌트 단위까지 설계</strong>합니다. 예를 들어 카카오톡 서비스의 구조를 말해본다면, 우선 가장 높은 차원의 페이지로 (1) 친구 (2) 채팅 (3) 뷰 (4) 쇼핑 (5) 설정 페이지가 있습니다. 해당 페이지는 하단 내비게이션에서 바로 이동할 수 있습니다.</p> <p><img src="/image/demo_main_01_2.png" alt="https://minio.todomall.app/course/IT_서비스_전과정_기획하기/기획_문서_작성/IA_설계하기/image_1.png"></p> <p> 이 중에서 채팅 페이지으로 이동하면, 개별 채팅방을 확인할 수 있습니다. 채팅방 목록 중에서 하나를 클릭하면, 채팅방 페이지로 이동됩니다. 이 채팅방 페이지는 채팅 페이지의 하위 차원에 있는 페이지입니다. </p> <p><img src="/image/demo_main_01_3.png" alt="https://minio.todomall.app/course/IT_서비스_전과정_기획하기/기획_문서_작성/IA_설계하기/image_2.png"></p>',
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/자료_수집/데이터_창고_활용하기/image_bestPractice.png",
                        },
                        {
                            id: "b3e112fb-27aa-4ed6-843f-39552e210440",
                            title: "전문가 활용하기",
                            status: PROCESS_STATUS.WAITING,
                            orderBy: 3,
                            taskTitle:
                                "보고서 작성에서 본인에게 가장 힘든 부분 적어보기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/자료_수집/전문가_활용하기/image_bestPractice.png",
                        },
                    ],
                },
                {
                    id: "9f85c577-4a87-4a52-90ae-4e2d31c4c826",
                    title: "게시글 페이지",
                    status: PROCESS_STATUS.WAITING,
                    missionTitle: "완성한 앱 배포하기",
                    todos: [
                        {
                            id: "68ee0cfc-5bf7-4347-88f9-87ca925dcfaf",
                            title: "양식 만들기",
                            status: PROCESS_STATUS.WAITING,
                            orderBy: 0,
                            taskTitle:
                                "자신만의 보고서 표지와 목차 양식 만들기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/보고서_작성/양식_만들기/image_bestPractice.png",
                        },
                        {
                            id: "b68aa604-816c-4500-a343-350f69a1dd5f",
                            title: "보고서 문장 만들기",
                            status: PROCESS_STATUS.WAITING,
                            orderBy: 1,
                            taskTitle:
                                "예시를 참고하여 보고서 문장 작성법 익히기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl: null,
                        },
                        {
                            id: "b9822835-fe35-42d7-b500-4e8df190df33",
                            title: "도표 활용하기",
                            status: PROCESS_STATUS.WAITING,
                            orderBy: 2,
                            taskTitle:
                                "하루 일과를 숫자와 도표만을 활용하여 작성하기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/보고서_작성/도표_활용하기/image_bestPractice.png",
                        },
                        {
                            id: "73db7b4b-5109-4af4-a235-d06d1b98564a",
                            title: "자료 첨부하기",
                            status: PROCESS_STATUS.WAITING,
                            orderBy: 3,
                            taskTitle:
                                "가이드에서 설명하려는 내용을 한 문장으로 요약하기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/보고서_작성/자료_첨부하기/image_bestPractice.png",
                        },
                    ],
                },
                {
                    id: "e3ee0957-b627-436e-92d0-a034e99ab00d",
                    title: "유저_리서치",
                    status: PROCESS_STATUS.WAITING,
                    missionTitle: "리서치 기획안 완성하기",
                    todos: [
                        {
                            id: "b3ceacaa-f2bf-4399-a7ac-5b925f327965",
                            title: "퇴고하기",
                            status: PROCESS_STATUS.WAITING,
                            orderBy: 0,
                            taskTitle:
                                "투두가이드의 예시 문장을 퇴고(교정, 교열)하기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/최종_점검_및_제출/퇴고하기/image_bestPractice.png",
                        },
                        {
                            id: "ad8707f3-cbf0-4f49-b9d3-20b612aa2590",
                            title: "피드백 구하기",
                            status: PROCESS_STATUS.WAITING,
                            orderBy: 1,
                            taskTitle:
                                "글쓰기 플랫폼에 글을 올려 지인들에게 공유하기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/최종_점검_및_제출/피드백_구하기/image_bestPractice.png",
                        },
                        {
                            id: "d96c9c14-00d1-4836-aa2f-fbcca9b010cc",
                            title: "최종 제출하기",
                            status: PROCESS_STATUS.WAITING,
                            orderBy: 2,
                            taskTitle: "규칙을 적용하여 파일명 만들기",
                            body: "{투두 가이드, HTML}",
                            bestPracticeImageUrl:
                                "https://minio.todomall.app/course/단계별_보고서_작성법_습득하기/최종_점검_및_제출/최종_제출하기/image_bestPractice.png",
                        },
                    ],
                },
            ],
        },
        //
    },
};
