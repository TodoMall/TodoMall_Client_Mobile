import gql from "graphql-tag";

export const getProductListByQuery = gql`
    query getOrderByOrderNumber($orderNumber: String!) {
        getOrderByOrderNumber(orderNumber: $orderNumber) {
            createdAt
        }
    }
`;
