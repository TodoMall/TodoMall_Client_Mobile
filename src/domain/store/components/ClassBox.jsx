import styled from "styled-components";

import { COLOR, FONT_STYLE } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { BodyL, BodyXL, DetailS } from "../../../mds/text";

const ClassBox = ({ classInfo }) => {
    return (
        <Container>
            <ClassThumbnail />
            <SubTitle fontColor={COLOR.GRAY500}>
                {
                    "서울사이버대학을 다니고 나의 성공시대 시작됐다 서울사이버대학을 다니고 나를 찾는 회사 많아졌다 서울사이버대학을 다니고 내 인생이 달라졌다. 새로운 시대 새로운 대학 서울사이버대학교"
                }
            </SubTitle>
            <Title fontColor={COLOR.GRAY900}>
                {"노션으로 포트폴리오 만들기"}
            </Title>
            <RowBox justifyContent={"none"}>
                <BodyL fontColor={COLOR.GRAY900}>{24}%</BodyL>
                <BodyXL
                    margin={"0 0.125rem 0 0.25rem"}
                    fontColor={COLOR.ERROR500}
                >
                    {"19,300"}
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

const ClassThumbnail = styled.div`
    width: 100%;
    height: 8rem;
    object-fit: contain;
    content: url("/image/demo_promotion_img_1.png");
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
