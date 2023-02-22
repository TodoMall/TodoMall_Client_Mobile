import styled from "styled-components";

import { COLOR } from "../../../constants";
import {
    BrandLogoLikeBubbleImage,
    BrandLogoList,
    RocketImage,
} from "../../../mds/image";
import { HeadingXXL } from "../../../mds/text";

const OnboardingItem = ({ itemNumber = 0 }) => {
    const getItem = () => {
        if (itemNumber === 1) {
            return (
                <>
                    <TitleTextContainer>
                        <HeadingXXL fontColor={COLOR.WHITE}>
                            지금 바로
                        </HeadingXXL>
                        <HeadingXXL fontColor={COLOR.WHITE}>
                            23개의 클래스를
                        </HeadingXXL>
                        <HeadingXXL fontColor={COLOR.WHITE}>
                            찾아볼 수 있어요.
                        </HeadingXXL>
                    </TitleTextContainer>
                    <BrandLogoList />
                </>
            );
        }

        if (itemNumber === 2) {
            return (
                <>
                    <RocketImage />
                    <HeadingXXL fontColor={COLOR.WHITE}>투두몰에서</HeadingXXL>
                    <HeadingXXL fontColor={COLOR.WHITE}>
                        새로운 도전을
                    </HeadingXXL>
                    <HeadingXXL fontColor={COLOR.WHITE}>
                        지금 시작해볼까요?
                    </HeadingXXL>
                </>
            );
        }

        return (
            <>
                <ImageContainer>
                    <BrandLogoLikeBubbleImage />
                </ImageContainer>
                <HeadingXXL fontColor={COLOR.WHITE}>
                    빠르게 변화하는 세상
                </HeadingXXL>
                <HeadingXXL fontColor={COLOR.WHITE}>
                    믿은직한 전문가와
                </HeadingXXL>
                <HeadingXXL fontColor={COLOR.WHITE}>학습하세요.</HeadingXXL>
            </>
        );
    };

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

const ImageContainer = styled.div`
    margin-bottom: 4.5rem;
`;
