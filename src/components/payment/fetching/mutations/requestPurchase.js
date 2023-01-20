import gql from "graphql-tag";

export const VERIFY_ORDER = gql`
  mutation verifyOrder($impUid: String!, $merchantUid: String!) {
    verifyOrder(input: { impUid: $impUid, merchantUid: $merchantUid }) {
      isPaid
    }
  }
`;
