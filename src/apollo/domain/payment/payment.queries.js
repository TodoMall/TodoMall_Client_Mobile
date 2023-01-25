import gql from "graphql-tag";

export const getOrderStateByOrderNumber = gql`
  query getOrderStateByOrderNumber($orderNumber: String!) {
    getOrderStateByOrderNumber(orderNumber: $orderNumber) {
      id
      createdAt
      updatedAt
      member {
        name
      }
      product {
        price
      }
    }
  }
`;

export const getProductById = gql`
  query getProductById($id: String!) {
    getProductById(id: $id) {
      title
      price
      sessions {
        title
        orderBy
        duration
      }
      creator {
        id
      }
    }
  }
`;
