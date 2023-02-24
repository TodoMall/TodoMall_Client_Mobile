import gql from "graphql-tag";

export const getMemberAgreeById = gql`
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
