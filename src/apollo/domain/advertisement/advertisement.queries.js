import gql from "graphql-tag";

export const getMobileAdvertisementByType = gql`
    query getMobileAdvertisementByType($type: ADVERTISEMENT_TYPE!) {
        getAdvertisementByType(data: { type: $type }) {
            id
            name
            mobileImageUrl
            redirectUrl
        }
    }
`;
