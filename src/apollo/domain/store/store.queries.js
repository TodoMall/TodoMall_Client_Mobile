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
export const getProductById = gql`
    query getProductById($id: String!) {
        getProductById(id: $id) {
            title
            subDescription
            imageUrl
            level
            description
            price
            discountPrice
            discountPercent
            additionalInfoList
            retryCount
            creator {
                id
                imageUrl
                name
                job
                career
                description
            }
            expectIts {
                title
                imageUrl
            }
            recommends {
                imageUrl
                title
                description
            }
            recommendUsers {
                id
                title
                description
            }
            sessions {
                title
                orderBy
                duration
                thumbnailUrl
                todos {
                    id
                    orderBy
                    title
                }
            }
        }
    }
`;
