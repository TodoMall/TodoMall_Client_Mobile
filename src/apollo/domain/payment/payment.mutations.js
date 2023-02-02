import gql from "graphql-tag";

export const verifyOrder = gql`
  mutation verifyOrder($impUid: String!, $merchantUid: String!) {
    verifyOrder(input: { impUid: $impUid, merchantUid: $merchantUid }) {
      state
    }
  }
`;

export const createOrder = gql`
  mutation createOrder(
    $productId: String!
    $memberId: String!
    $creatorId: String!
  ) {
    createOrder(
      data: {
        productId: $productId
        memberId: $memberId
        creatorId: $creatorId
      }
    ) {
      orderNumber
    }
  }
`;

export const buyProduct = gql`
  mutation buyProduct(
    $productId: String!
    $memberId: String!
    $orderNumber: String!
  ) {
    buyProduct(
      data: {
        productId: $productId
        memberId: $memberId
        orderNumber: $orderNumber
      }
    ) {
      id
    }
  }
`;
