import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, FONT_STYLE, PATH } from "../../../constants";
import Divider from "../../Divider";
import { TextButton } from "../../button";
import { BrandLogo } from "../../icon";
import { BodyS, DetailXS } from "../../text";

const Footer = () => {
    const navigate = useNavigate();

    const handleServicePage = () => navigate(PATH.SERVICE);
    const handlePersonalPage = () => navigate(PATH.SETTING_PERSONAL);
    const handleRefundPage = () => navigate(PATH.REFUND);
    const handleNoticePage = () => navigate(PATH.NOTICE);
    // TODO : 자세한 기획 픽스나면 uri 설정
    const handleAboutUsPage = () => navigate();
    const handlPartnershipPage = () => navigate();
    const handleCSPage = () => (window.location.href = PATH.CS_CENTER);

    const CustomTextButton = ({ children, onClick: handleClick }) => {
        return (
            <TextButton
                fontColor={COLOR.GRAY600}
                fontWeight={FONT_STYLE.PRETENDARD_125.WEIGTHT}
                fontSize={FONT_STYLE.PRETENDARD_125.SIZE}
                lineHeight={FONT_STYLE.PRETENDARD_125.HEIGHT}
                margin={"0 1.563rem 0 0"}
                onClick={handleClick}
            >
                {children}
            </TextButton>
        );
    };

    return (
        <Container>
            <TextButtonGroup>
                <CustomTextButton onClick={handleServicePage}>
                    이용약관
                </CustomTextButton>
                <CustomTextButton onClick={handlePersonalPage}>
                    개인정보처리방침
                </CustomTextButton>
                <CustomTextButton onClick={handleRefundPage}>
                    취소/환불 정책
                </CustomTextButton>
                <CustomTextButton onClick={handleNoticePage}>
                    공지사항
                </CustomTextButton>
                <CustomTextButton onClick={handleCSPage}>
                    고객센터
                </CustomTextButton>
                <CustomTextButton onClick={handleAboutUsPage}>
                    회사소개
                </CustomTextButton>
                <CustomTextButton onClick={handlPartnershipPage}>
                    기업제휴
                </CustomTextButton>
            </TextButtonGroup>
            <Divider margin="1.25rem 0 1rem 0" color={COLOR.GRAY100} />
            <BrandLogo />
            <DescriptionTextGroup>
                <DetailXS margin={"0 0 0.25rem 0"} fontColor={COLOR.GRAY500}>
                    마이플랜잇 | 사업자등록번호 : 274-12-01980 | 대표 : 최현권 |
                    개인정보담당자 : 이명성
                </DetailXS>
                <DetailXS margin={"0.25rem 0 0 0"} fontColor={COLOR.GRAY500}>
                    주소 : 서울특별시 송파구 양재대로 1218, 107동 15층 1502호 |
                    TEL : 010-2154-3992 | 메일 : myplanit.unicorn@gmail.com
                </DetailXS>
            </DescriptionTextGroup>
            <BodyS fontColor={COLOR.GRAY600}>
                Copyright ⓒ 2022 myplanit. All rights reserved.
            </BodyS>
        </Container>
    );
};

export default Footer;

const DescriptionTextGroup = styled.div`
    margin: 1rem 0 0.75rem 0;
`;

const TextButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;
const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: ${COLOR.GRAY50};
    padding: 1.25rem 5rem 2rem 5rem;
`;
