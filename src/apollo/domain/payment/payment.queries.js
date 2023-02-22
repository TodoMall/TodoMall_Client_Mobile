import gql from "graphql-tag";

export const getOrderByOrderNumber = gql`
    query getOrderByOrderNumber($orderNumber: String!) {
        getOrderByOrderNumber(orderNumber: $orderNumber) {
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
