import gql from "graphql-tag";

export const signInWithKakao = gql`
    mutation signInWithKakao($data: String!) {
        signInWithKakao(data: $data)
    }
`;

export const signInWithApple = gql`
    mutation signInWithApple($data: String!) {
        signInWithApple(data: $data)
    }
`;

export const updateMemberAgreement = gql`
    mutation UpdateAlarmStatus(
        $memberId: String!
        $isMarketingAlarmAgree: Boolean!
        $isPushAlarmAgree: Boolean!
    ) {
        updateAlarmStatus(
            data: {
                memberId: $memberId
                isMarketingAlarmAgree: $isMarketingAlarmAgree
                isPushAlarmAgree: $isPushAlarmAgree
            }
        ) {
            isMarketingAlarmAgree
            isPushAlarmAgree
        }
    }
`;
