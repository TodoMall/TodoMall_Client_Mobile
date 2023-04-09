import gql from "graphql-tag";

export const getMemberById = gql`
    query getMemberById($id: String!) {
        getMemberById(data: { id: $id }) {
            name
            email
            image
        }
    }
`;

export const getMemberAgreementById = gql`
    query getMemberById($id: String!) {
        getMemberById(data: { id: $id }) {
            agreement {
                isServiceAgree
                isPersonalAgree
                isMarketingAlarmAgree
                isPushAlarmAgree
            }
        }
    }
`;

export const getSubscribeProductByMemberId = gql`
    query getMemberById($id: String!) {
        getMemberById(data: { id: $id }) {
            subscribeProducts {
                id
                status
                retryCount
                product {
                    retryCount
                    productTypes
                }
                sessions {
                    id
                    status
                    title
                    missionTitle
                    expireDate
                    todos {
                        id
                        status
                    }
                }
            }
        }
    }
`;

export const getOrderByMemberId = gql`
    query getOrderByMemberId($memberId: String!) {
        getOrderByMemberId(memberId: $memberId) {
            id
            state
            product {
                retryCount
                thumbnailUrl
            }
            member {
                subscribeProducts {
                    id
                    title
                    status
                    retryCount
                    createdAt
                }
            }
        }
    }
`;

export const getTodoDetailByMemberId = gql`
    query getTodoDetailByMemberId($id: String!) {
        getMemberById(data: { id: $id }) {
            subscribeProducts {
                id
                product {
                    id
                    creator {
                        name
                        job
                    }
                    sessions {
                        id
                        title
                        orderBy
                        todos {
                            id
                            title
                            orderBy
                            taskTitle
                            bestPracticeImageUrl
                        }
                    }
                }
                sessions {
                    id
                    title
                    status
                    orderBy
                    missionTitle
                    todos {
                        id
                        title
                        orderBy
                        status
                        body
                    }
                }
            }
        }
    }
`;

export const getAllNotification = gql`
    query getAllNotification {
        getAllAlarms {
            id
            type
            title
            context
            createdAt
        }
    }
`;

export const getAllNotice = gql`
    query getAllNotification {
        getAllAnnouncement {
            id
            title
            content
            published
            lastPublishedAt
            createdAt
            updatedAt
        }
    }
`;

export const getNoticeById = gql`
    query getNoticeById($id: String!) {
        getAnnouncementById(id: $id) {
            title
            content
            lastPublishedAt
        }
    }
`;
