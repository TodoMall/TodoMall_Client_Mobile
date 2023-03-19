import { useEffect, useState } from "react";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getMobileAdvertisementByType } from "../../../apollo/domain/advertisement";
import { ADVERTISEMENT_TYPE, COLOR } from "../../../constants";

const BandBanner = () => {
    const [bandBanner, setBandBanner] = useState();
    const [selectedBanner, setSelectedandBanner] = useState();
    const handleBanner = () => {
        window.location.href = selectedBanner?.redirectUrl;
    };

    const { data } = useQuery(getMobileAdvertisementByType, {
        variables: {
            type: ADVERTISEMENT_TYPE.BAND,
        },
        onCompleted: data => {
            setBandBanner(data.getAdvertisementByType);
        },
    });

    useEffect(() => {
        if (bandBanner) {
            setSelectedandBanner(
                bandBanner[Math.floor(Math.random() * bandBanner.length)]
            );
        }
    }, [bandBanner]);

    return (
        <Banner
            src={selectedBanner?.mobileImageUrl}
            alt="band_banner"
            onClick={handleBanner}
        />
    );
};

export default BandBanner;

const Banner = styled.img`
    width: 100%;
    height: 5.25rem;
    background-color: ${COLOR.GRAY50};
`;
