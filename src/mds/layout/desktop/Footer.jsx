import { useNavigate } from "react-router-dom";
import { BrandLogo } from "../../icon";
import { TextButton } from "../../button";
import { COLOR, FONT_WEIGTHT, FONT_STYLE, PATH } from "../../../constants";
import Divider from "../../Divider";
import styled from "styled-components";

const Footer = () => {
  const navigate = useNavigate();

  const handleServicePage = () => navigate(PATH.SERVICE);
  const handlePersonalPage = () => navigate(PATH.PERSONAL);
  const handleRefundPage = () => navigate(PATH.REFUND);
  const handleNoticePage = () => navigate(PATH.NOTICE);
  const handleCSPage = () => (window.location.href = PATH.CS_CENTER);

  return (
    <Container>
      <TextButtonGroup>
        <TextButton
          fontColor={COLOR.GRAY600}
          fontWeight={FONT_WEIGTHT.PRETENDARD_MEDIUM}
          fontSize={FONT_STYLE.PRETENDARD_200.SIZE}
          lineHeight={FONT_STYLE.PRETENDARD_200.HEIGTH}
          margin={"0 1.563rem 0 0"}
          children={"이용약관"}
          onClick={handleServicePage}
        />
        <TextButton
          fontColor={COLOR.GRAY600}
          fontWeight={FONT_WEIGTHT.PRETENDARD_MEDIUM}
          fontSize={FONT_STYLE.PRETENDARD_200.SIZE}
          lineHeight={FONT_STYLE.PRETENDARD_200.HEIGTH}
          margin={"0 1.563rem"}
          children={"개인정보처리방침"}
          onClick={handlePersonalPage}
        />
        <TextButton
          fontColor={COLOR.GRAY600}
          fontWeight={FONT_WEIGTHT.PRETENDARD_MEDIUM}
          fontSize={FONT_STYLE.PRETENDARD_200.SIZE}
          lineHeight={FONT_STYLE.PRETENDARD_200.HEIGTH}
          margin={"0 1.563rem"}
          children={"취소/환불 정책"}
          onClick={handleRefundPage}
        />
        <TextButton
          fontColor={COLOR.GRAY600}
          fontWeight={FONT_WEIGTHT.PRETENDARD_MEDIUM}
          fontSize={FONT_STYLE.PRETENDARD_200.SIZE}
          lineHeight={FONT_STYLE.PRETENDARD_200.HEIGTH}
          margin={"0 1.563rem"}
          children={"공지사항"}
          onClick={handleNoticePage}
        />
        <TextButton
          fontColor={COLOR.GRAY600}
          fontWeight={FONT_WEIGTHT.PRETENDARD_MEDIUM}
          fontSize={FONT_STYLE.PRETENDARD_200.SIZE}
          lineHeight={FONT_STYLE.PRETENDARD_200.HEIGTH}
          margin={"0 1.563rem"}
          children={"고객센터"}
          onClick={handleCSPage}
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
  font-weight: ${FONT_WEIGTHT.PRETENDARD_REGULAR};
  font-size: ${FONT_STYLE.PRETENDARD_100.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_100.HEIGTH};
  color: ${COLOR.GRAY500};
  letter-spacing: -0.01em;
  margin: ${(props) => props.margin};
`;
const BorderText = styled.p`
  font-weight: ${FONT_WEIGTHT.PRETENDARD_BOLD};
  font-size: ${FONT_STYLE.PRETENDARD_200.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_200.HEIGTH};
  letter-spacing: -0.01em;
  color: ${COLOR.GRAY600};
`;
