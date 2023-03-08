import gql from "graphql-tag";

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
                thumbnailUrl
            }
            member {
                subscribeProducts {
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
                creator {
                    name
                    title
                }
                sessions {
                    id
                    title
                    status
                    missionTitle
                    orderBy
                    todos {
                        id
                        title
                        orderBy
                        taskTitle
                        status
                        body
                    }
                }
            }
        }
    }
`;
