import { useNavigate } from "react-router-dom";
import { BrandLogo } from "../../icon";
import { TextButton } from "../../button";
import { COLOR, FONT_STYLE, PATH } from "../../../constants";
import Divider from "../../Divider";
import styled from "styled-components";

const Footer = () => {
  const navigate = useNavigate();

  const handleServicePage = () => navigate(PATH.SERVICE);
  const handlePersonalPage = () => navigate(PATH.PERSONAL);
  const handleRefundPage = () => navigate(PATH.REFUND);
  const handleNoticePage = () => navigate(PATH.NOTICE);
  // TODO : 자세한 기획 픽스나면 uri 설정
  const handleAboutUsPage = () => navigate();
  const handlPartnershipPage = () => navigate();
  const handleCSPage = () => (window.location.href = PATH.CS_CENTER);

  const CustomTextButton = ({ children, onClick: handleClick }) => {
    return (
      //       font-weight: 500;
      // font-size: 14px;
      // line-height: 22px;
      <TextButton
        fontColor={COLOR.GRAY600}
        fontWeight={FONT_STYLE.PRETENDARD_125.WEIGTHT}
        fontSize={FONT_STYLE.PRETENDARD_125.SIZE}
        lineHeight={FONT_STYLE.PRETENDARD_125.HEIGHT}
        margin={"0 1.563rem 0 0"}
        children={children}
        onClick={handleClick}
      />
    );
  };

  return (
    <Container>
      <TextButtonGroup>
        <CustomTextButton children={"이용약관"} onClick={handleServicePage} />
        <CustomTextButton
          children={"개인정보처리방침"}
          onClick={handlePersonalPage}
        />
        <CustomTextButton
          children={"취소/환불 정책"}
          onClick={handleRefundPage}
        />
        <CustomTextButton children={"공지사항"} onClick={handleNoticePage} />
        <CustomTextButton children={"고객센터"} onClick={handleCSPage} />
        <CustomTextButton children={"회사소개"} onClick={handleAboutUsPage} />
        <CustomTextButton
          children={"기업제휴"}
          onClick={handlPartnershipPage}
        />
      </TextButtonGroup>
      <Divider margin="1.25rem 0 1rem 0" color={COLOR.GRAY100} />
      <BrandLogo />
      <DescriptionTextGroup>
        <Text margin={"0 0 0.25rem 0"}>
          마이플랜잇 | 사업자등록번호 : 274-12-01980 | 대표 : 최현권 |
          개인정보담당자 : 이명성
        </Text>
        <Text margin={"0.25rem 0 0 0"}>
          주소 : 서울특별시 송파구 양재대로 1218, 107동 15층 1502호 | TEL :
          010-2154-3992 | 메일 : myplanit.unicorn@gmail.com
        </Text>
      </DescriptionTextGroup>
      <BorderText>Copyright ⓒ 2022 myplanit. All rights reserved.</BorderText>
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

const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  font-weight: ${FONT_STYLE.PRETENDARD_50.WEIGTHT};
  font-size: ${FONT_STYLE.PRETENDARD_50.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_50.HEIGHT};
  color: ${COLOR.GRAY500};
  letter-spacing: -0.025em;
  margin: ${(props) => props.margin};
`;
const BorderText = styled.p`
  font-weight: ${FONT_STYLE.PRETENDARD_150.WEIGTHT};
  font-size: ${FONT_STYLE.PRETENDARD_150.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_150.HEIGHT};
  letter-spacing: -0.01em;
  color: ${COLOR.GRAY600};
`;