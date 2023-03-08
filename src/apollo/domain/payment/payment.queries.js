import gql from "graphql-tag";

export const getOrderByOrderNumber = gql`
    query getOrderByOrderNumber($orderNumber: String!) {
        getOrderByOrderNumber(orderNumber: $orderNumber) {
            pgProvider
            createdAt
            product {
                discountPrice
            }
            member {
                name
            }
        }
    }
`;

export const getOrderProductById = gql`
    query getOrderProductById($id: String!) {
        getProductById(id: $id) {
            title
            price
            discountPrice
            discountPercent
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
