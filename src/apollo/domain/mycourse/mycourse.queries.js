import gql from "graphql-tag";

export const getAllPromotion = gql`
    query getAllPromotion {
        getAllPromotion {
            id
            title
            products {
                id
                thumbnailUrl
                discountPrice
                discountPercent
                subDescription
            }
        }
    }
`;

export const getTodoBestPracticeByProductId = gql`
    query getTodoBestPracticeByProductId($id: String!) {
        getProductById(id: $id) {
            id
            creator {
                name
                job
            }
            sessions {
                id
                todos {
                    id
                    title
                    bestPracticeImageUrl
                }
            }
        }
    }
`;
