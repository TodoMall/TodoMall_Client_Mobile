import gql from "graphql-tag";

export const GET_MERCHANT_UID = gql`
  query getOrderNumber {
    getOrderNumber {
      orderNumber
    }
  }
`;
