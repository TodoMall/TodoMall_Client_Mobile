import styled from "styled-components";

import { COLOR } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { BodyXS, HeadingXL } from "../../../mds/text";

const ExpectedPerformance = ({ expectIts }) => {
    const isEndWithConsonant = expectItTitle => {
        const charCode = expectItTitle?.charCodeAt(expectItTitle.length - 1);
        const postposition = (charCode - 44032) % 28 !== 0 ? "을" : "를";
        return postposition;
    };

    return (
        <Container>
            <Description>
                <BodyXS fontColor={COLOR.GRAY700}>지금 시작하면 나만의</BodyXS>
                <RowBox justifyContent="flex-start">
                    <HeadingXL fontColor={COLOR.BRAND_COLOR}>
                        {expectIts?.title}
                    </HeadingXL>
                    <HeadingXL>
                        {isEndWithConsonant(expectIts?.title)} 만들 수 있어요
                    </HeadingXL>
                </RowBox>
            </Description>
            <ExpectedPerformanceImg src={expectIts?.imageUrl} />
        </Container>
    );
};

export default ExpectedPerformance;

const Container = styled.div`
    padding: 0 1rem;
    margin-bottom: 2.25rem;
`;

const ExpectedPerformanceImg = styled.img`
    width: 100%;
    border-radius: 1.25rem;
`;

const Description = styled.div`
    padding: 0 0.5rem;
`;
