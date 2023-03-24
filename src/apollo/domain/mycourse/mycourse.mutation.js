import gql from "graphql-tag";

export const updateSubscribeTodoState = gql`
    mutation updateSubscribeTodoState(
        $memberId: String!
        $subscribeProductId: String!
        $subscribeSessionId: String!
        $subscribeTodoId: String!
    ) {
        updateSubscribeTodoState(
            input: {
                memberId: $memberId
                subscribeProductId: $subscribeProductId
                subscribeSessionId: $subscribeSessionId
                subscribeTodoId: $subscribeTodoId
            }
        ) {
            status
        }
    }
`;

export const updateSubscribeSessionState = gql`
    mutation updateSubscribeSessionState(
        $memberId: String!
        $subscribeProductId: String!
        $subscribeSessionId: String!
        $missionImage: String
    ) {
        updateSubscribeSessionState(
            input: {
                memberId: $memberId
                subscribeProductId: $subscribeProductId
                subscribeSessionId: $subscribeSessionId
                missionImage: $missionImage
            }
        ) {
            status
        }
    }
`;
