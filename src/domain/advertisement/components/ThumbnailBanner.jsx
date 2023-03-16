import { useEffect, useState } from "react";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getMobileAdvertisementByType } from "../../../apollo/domain/advertisement";
import { ADVERTISEMENT_TYPE } from "../../../constants";
import { useQueryString } from "../../../hooks";

const ThumbnailBanner = () => {
    const [category] = useQueryString("tag");

    const [thumbnailByTag, setThumbnailByTag] = useState();

    const { data } = useQuery(getMobileAdvertisementByType, {
        variables: {
            type: ADVERTISEMENT_TYPE.THUMBNAIL,
        },
    });

    useEffect(() => {
        setThumbnailByTag(
            data?.getAdvertisementByType.find(
                el => el.name === category.toLocaleLowerCase()
            )
        );
    }, [category, data]);

    return (
        <Thumbnail
            src={thumbnailByTag?.mobileImageUrl}
            alt={"store thumbnail"}
        />
    );
};
export default ThumbnailBanner;

const Thumbnail = styled.img`
    width: 100%;
    object-fit: contain;
`;
