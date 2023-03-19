import styled from "styled-components";

import { COLOR } from "../../../constants";
import { BodyXL, BodyXS, DetailXS } from "../../../mds/text";

const CreatorProfile = ({ image, name, career, description }) => {
    return (
        <Container>
            <CreatorImage src={image} alt="" />
            <BodyXL margin={"0.5rem 0 0.25rem"}>{name} 전문가</BodyXL>
            <CreatorCareer>
                {career?.map((career, idx) => {
                    return <DetailXS key={idx}>{career}</DetailXS>;
                })}
            </CreatorCareer>
            <BodyXS margin={"1.25rem 0 0 0"}>{description}</BodyXS>
        </Container>
    );
};

export default CreatorProfile;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
    padding: 1.25rem 1rem;
    background: ${COLOR.GRAY50};
    p {
        text-align: center;
    }
`;

const CreatorImage = styled.img`
    width: 3.25rem;
    height: 3.25rem;
    object-fit: contain;
    border-radius: 2.75rem;
`;

const CreatorCareer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
`;
