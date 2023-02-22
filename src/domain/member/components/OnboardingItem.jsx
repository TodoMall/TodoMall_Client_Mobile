import styled from "styled-components";

import {
    BrandLogoLikeBubbleImage,
    BrandLogoList,
    RocketImage,
} from "../../../mds/image";
import { COLOR, FONT_STYLE } from "../../../constants";

const OnboardingItem = ({ itemNumber = 0 }) => {
    const getItem = () => {
        // item 2
        if (itemNumber === 1) {
            return (
                <>
                    <TitleTextContainer>
                        <TitleText>지금 바로</TitleText>
                        <TitleText>23개의 클래스를</TitleText>
                        <TitleText>찾아볼 수 있어요.</TitleText>
                    </TitleTextContainer>
                    <BrandLogoList />
                </>
            );
        }

        if (itemNumber === 2) {
            return (
                <>
                    <RocketImage />
                    <TitleText>투두몰에서</TitleText>
                    <TitleText>새로운 도전을</TitleText>
                    <TitleText>지금 시작해볼까요?</TitleText>
                </>
            );
        }

        // item 1
        return (
            <>
                <ImageContainer>
                    <BrandLogoLikeBubbleImage />
                </ImageContainer>
                <TitleText>빠르게 변화하는 세상</TitleText>
                <TitleText>믿은직한 전문가와</TitleText>
                <TitleText>학습하세요.</TitleText>
            </>
        );
    };

    // item 1
    return <Container>{getItem()}</Container>;
};

export default OnboardingItem;

const Container = styled.div`
    margin-top: 6.625rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const TitleTextContainer = styled.div`
    margin-bottom: 4rem;
`;

const TitleText = styled.p`
    font-size: ${FONT_STYLE.PRETENDARD_500.SIZE};
    font-weight: ${FONT_STYLE.PRETENDARD_500.WEIGTHT};
    line-height: ${FONT_STYLE.PRETENDARD_500.HEIGHT};
    color: ${COLOR.WHITE};
`;

const ImageContainer = styled.div`
    margin-bottom: 4.5rem;
`;
