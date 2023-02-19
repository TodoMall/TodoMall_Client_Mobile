import gql from "graphql-tag";

// FIXME : query must be changed
export const getProductListByQuery = gql`
  query getOrderByOrderNumber($query: String!) {
    getOrderByOrderNumber(query: $query) {
      createdAt
    }
  }
`;
