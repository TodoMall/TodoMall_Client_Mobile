import gql from "graphql-tag";

/* About Auth */
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

export const deleteMember = gql`
    mutation deleteMember($id: String!) {
        deleteMember(input: { id: $id })
    }
`;

/* About Update Member Agreement Status */
export const updateMemberAlarmStatusAgreement = gql`
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

export const updateAgreement = gql`
    mutation updateAgreement(
        $memberId: String!
        $isServiceAgree: Boolean!
        $isPersonalAgree: Boolean!
        $isMarketingAlarmAgree: Boolean!
        $isPushAlarmAgree: Boolean!
    ) {
        updateAgreement(
            data: {
                memberId: $memberId
                isServiceAgree: $isServiceAgree
                isPersonalAgree: $isPersonalAgree
                isMarketingAlarmAgree: $isMarketingAlarmAgree
                isPushAlarmAgree: $isPushAlarmAgree
            }
        ) {
            agreement {
                isServiceAgree
                isPersonalAgree
                isPushAlarmAgree
                isMarketingAlarmAgree
            }
        }
    }
`;

export const registerMember = gql`
    mutation registerMember($id: String!, $agreement: RegisterAgreementInput!) {
        registerMember(input: { id: $id, agreement: $agreement }) {
            id
        }
    }
`;
