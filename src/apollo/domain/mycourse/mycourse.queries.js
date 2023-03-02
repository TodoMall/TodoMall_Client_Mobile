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
