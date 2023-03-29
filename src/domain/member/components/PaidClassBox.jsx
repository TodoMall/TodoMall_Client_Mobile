import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, FONT_STYLE, PATH } from "../../../constants";
import { BodyXS } from "../../../mds/text";
import { ProductStatusIcon } from "../hooks";

const PaidClassBox = ({
    courseId,
    thumbnailUrl,
    subscribeProduct,
    challengeOrder,
}) => {
    const navigate = useNavigate();

    const handleDetail = () =>
        navigate({
            pathname: PATH.PAID_PRODUCT_DETAIL,
            search: `?courseId=${courseId}`,
        });

    return (
        <Container onClick={handleDetail}>
            <Thumbnail src={thumbnailUrl} alt={"paid product thumbnail"} />
            <DescriptionContainer>
                <BodyXS fontColor={COLOR.GRAY500}>
                    {challengeOrder}번째 도전
                </BodyXS>
                <Title>{subscribeProduct?.title}</Title>
                <ProductStatusIcon
                    retryCount={subscribeProduct?.retryCount}
                    processStatus={subscribeProduct?.status}
                />
            </DescriptionContainer>
        </Container>
    );
};
export default PaidClassBox;

const Container = styled.div`
    min-width: 8.75rem;
    max-width: 11.625rem;
    margin-bottom: 1rem;
`;

const DescriptionContainer = styled.div`
    padding: 0 0.25rem;
`;
const Thumbnail = styled.img`
    width: 100%;
    height: 8rem;
    object-fit: cover;
    border-radius: 1.25rem;
`;

const Title = styled.p`
    word-break: keep-all;
    color: ${COLOR.GRAY900};
    font-weight: ${FONT_STYLE.PRETENDARD_250.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_250.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_250.HEIGHT};
    letter-spacing: ${FONT_STYLE.PRETENDARD_250.LETTER_SPACING};
`;
