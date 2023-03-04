import gql from "graphql-tag";

export const getProductListByQuery = gql`
    query getOrderByOrderNumber($orderNumber: String!) {
        getOrderByOrderNumber(orderNumber: $orderNumber) {
            createdAt
        }
    }
`;

export const getPromotionByType = gql`
    query getPromotionByType($type: String!) {
        getPromotionByType(type: $type) {
            title
            promotionType
            products {
                id
                title
                thumbnailUrl
                discountPrice
                discountPercent
                subDescription
                level
                sessions {
                    duration
                    todos {
                        id
                    }
                }
            }
        }
    }
`;

export const getProductByType = gql`
    query getProductByType($type: PRODUCT_TYPE!) {
        getProductByType(data: { type: $type }) {
            id
            title
            thumbnailUrl
            discountPrice
            discountPercent
            subDescription
        }
    }
`;
