import gql from "graphql-tag";

export const GET_PAID_PRODUCT = gql`
  query getProductById($id: String!) {
    getProductById(id: $id) {
      id
    }
  }
`;
