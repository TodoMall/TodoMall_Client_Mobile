import gql from "graphql-tag";

// FIXME : query must be changed
export const getProductListByQuery = gql`
  query getOrderByOrderNumber {
    getOrderByOrderNumber(orderNumber: "ORD2023217-000182") {
      pgProvider
      product {
        price
      }
      member {
        name
      }
      createdAt
    }
  }
`;
