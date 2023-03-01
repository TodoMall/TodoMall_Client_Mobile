import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, FONT_STYLE, PATH } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { BodyL, BodyXL, DetailS } from "../../../mds/text";

const ClassBox = ({
    courseId,
    thumbnailUrl,
    title,
    subDescription,
    discountPrice,
    discountPercent,
}) => {
    const navigate = useNavigate();

    const handleStoreDetailPage = () => {
        navigate(PATH.STORE_DETAIL(courseId));
    };

    return (
        <Container onClick={handleStoreDetailPage}>
            <ClassThumbnail src={thumbnailUrl} alt={"promotion thumbnail"} />
            <SubTitle fontColor={COLOR.GRAY500}>{subDescription}</SubTitle>
            <Title fontColor={COLOR.GRAY900}>{title}</Title>
            <RowBox justifyContent={"none"}>
                <BodyL fontColor={COLOR.GRAY900}>{discountPercent}%</BodyL>
                <BodyXL
                    margin={"0 0.125rem 0 0.25rem"}
                    fontColor={COLOR.ERROR500}
                >
                    {discountPrice}
                </BodyXL>
                <DetailS margin={"0.125rem 0 0 0"} fontColor={COLOR.ERROR500}>
                    원
                </DetailS>
            </RowBox>
        </Container>
    );
};

export default ClassBox;

const Container = styled.div`
    min-width: 140px;
    max-width: 11.625rem;
    margin: 0 0 2rem 0;
`;

const ClassThumbnail = styled.img`
    width: 100%;
    height: 8rem;
    object-fit: contain;
    content: url(${props => props.thumbnail});
`;
const Title = styled.p`
    word-break: keep-all;
    color: ${props => props.fontColor};
    font-weight: ${FONT_STYLE.PRETENDARD_250.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_250.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_250.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_250.LETTER_SPACING};
`;

const SubTitle = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${props => props.fontColor};
    margin-top: 0.5rem;
    font-weight: ${FONT_STYLE.PRETENDARD_125.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_125.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_125.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_125.LETTER_SPACING};
`;
