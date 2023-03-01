import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH } from "../../../constants";
import Divider from "../../Divider";
import { TextButton } from "../../button";
import { BrandLogo } from "../../icon";
import { BodyS, DetailXS } from "../../text";

const CompanyInfo = () => {
    const navigate = useNavigate();

    const handleMainPage = () => navigate(PATH.MAIN);
    const handleServicePage = () => navigate(PATH.SERVICE);
    const handlePersonalPage = () => navigate(PATH.SETTING_PERSONAL);
    const handleRefundPage = () => navigate(PATH.REFUND);
    const handleNoticePage = () => navigate(PATH.NOTICE);

    return (
        <Container>
            <div onClick={handleMainPage}>
                <BrandLogo logoColor={COLOR.GRAY500} width={84} height={16} />
            </div>
            <DetailXS margin={"0.5rem 0"} fontColor={COLOR.GRAY600}>
                마이플랜잇
            </DetailXS>

            <Divider color={COLOR.GRAY50} margin={"0.25rem 0"} />

            <TextButton onClick={handleServicePage}>
                <DetailXS
                    margin={"0.5rem 0 0.375rem 0"}
                    fontColor={COLOR.GRAY600}
                >
                    이용약관
                </DetailXS>
            </TextButton>

            <TextButton onClick={handlePersonalPage}>
                <DetailXS margin={"0.375rem 0"} fontColor={COLOR.GRAY600}>
                    개인정보처리방침
                </DetailXS>
            </TextButton>

            <TextButton onClick={handleRefundPage}>
                <DetailXS margin={"0.375rem 0"} fontColor={COLOR.GRAY600}>
                    취소/환불 정책
                </DetailXS>
            </TextButton>

            <TextButton onClick={handleNoticePage}>
                <DetailXS margin={"0.375rem 0"} fontColor={COLOR.GRAY600}>
                    공지사항
                </DetailXS>
            </TextButton>

            <DetailXS margin={"0.375rem 0 0.25rem"} fontColor={COLOR.GRAY600}>
                고객센터
            </DetailXS>
            <DetailXS margin={"0 0 0.25rem"} fontColor={COLOR.GRAY600}>
                문의전화 : 010-2154-3992
            </DetailXS>
            <DetailXS fontColor={COLOR.GRAY600}>
                주중 09~18시 (점심시간 12~13시 30분 / 주말 및 공휴일 제외)
            </DetailXS>

            <Divider color={COLOR.GRAY50} margin={"0.75rem 0"} />

            <DetailXS margin={"0 0 0.25rem"} fontColor={COLOR.GRAY600}>
                사업자등록번호 : 274-12-01980 | 대표 : 최현권
            </DetailXS>
            <DetailXS margin={"0 0 0.25rem"} fontColor={COLOR.GRAY600}>
                주소 : 서울특별시 송파구 양재대로 1218, 107동 15층 1502호
            </DetailXS>
            <DetailXS margin={"0 0 0.5rem"} fontColor={COLOR.GRAY600}>
                메일 : myplanit.unicorn@gmail.com
            </DetailXS>
            <BodyS fontColor={COLOR.GRAY600}>
                Copyright ⓒ 2022 myplanit. All rights reserved.
            </BodyS>
        </Container>
    );
};
export default CompanyInfo;
const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 1.25rem;
`;
