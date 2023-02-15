import { useNavigate } from "react-router-dom";
import Divider from "../Divider";
import { TextButton } from "../button";
import { COLOR, FONT_WEIGTHT, FONT_STYLE } from "../../constants";
import styled from "styled-components";

const Footer = () => {
  const navigate = useNavigate();
  const handleServicePage = () => navigate("/setting/service");
  const handlePersonalPage = () => navigate("/setting/personal");
  const handleRefundPage = () => navigate("/setting/refund");
  const handleNoticePage = () => navigate("/setting/notice");
  const handleCSPage = () =>
    (window.location.href = "https://pf.kakao.com/_xhSxjExj/chat");

  return (
    <Container>
      <DemoLogoDiv>
        <p>todo mall logo</p>
      </DemoLogoDiv>
      <Divider margin="0.125rem 0" color={COLOR.GRAY50} />
      <Text>마이플랜잇</Text>
      <Divider margin="0.75rem 0" color={COLOR.GRAY50} />
      <TextButton
        fontColor={COLOR.GRAY600}
        fontWeight={FONT_WEIGTHT.PRETENDARD_REGULAR}
        fontSize={FONT_STYLE.PRETENDARD_100.SIZE}
        lineHeight={FONT_STYLE.PRETENDARD_100.HEIGTH}
        margin={"0 0 0.75rem"}
        textAlign={"left"}
        children={"이용약관"}
        onClick={handleServicePage}
      />
      <TextButton
        fontColor={COLOR.GRAY600}
        fontWeight={FONT_WEIGTHT.PRETENDARD_REGULAR}
        fontSize={FONT_STYLE.PRETENDARD_100.SIZE}
        lineHeight={FONT_STYLE.PRETENDARD_100.HEIGTH}
        margin={"0 0 0.75rem"}
        textAlign={"left"}
        children={"개인정보처리방침"}
        onClick={handlePersonalPage}
      />
      <TextButton
        fontColor={COLOR.GRAY600}
        fontWeight={FONT_WEIGTHT.PRETENDARD_REGULAR}
        fontSize={FONT_STYLE.PRETENDARD_100.SIZE}
        lineHeight={FONT_STYLE.PRETENDARD_100.HEIGTH}
        margin={"0 0 0.75rem"}
        textAlign={"left"}
        children={"취소/환불 정책"}
        onClick={handleRefundPage}
      />
      <TextButton
        fontColor={COLOR.GRAY600}
        fontWeight={FONT_WEIGTHT.PRETENDARD_REGULAR}
        fontSize={FONT_STYLE.PRETENDARD_100.SIZE}
        lineHeight={FONT_STYLE.PRETENDARD_100.HEIGTH}
        margin={"0 0 0.75rem"}
        textAlign={"left"}
        children={"공지사항"}
        onClick={handleNoticePage}
      />
      <TextButton
        fontColor={COLOR.GRAY600}
        fontWeight={FONT_WEIGTHT.PRETENDARD_REGULAR}
        fontSize={FONT_STYLE.PRETENDARD_100.SIZE}
        lineHeight={FONT_STYLE.PRETENDARD_100.HEIGTH}
        textAlign={"left"}
        children={"고객센터"}
        onClick={handleCSPage}
      />
      <Text margin={"0.25rem 0"}>문의전화 : 010-2154-3992</Text>
      <Text>주중 09~18시 (점심시간 12~13시 30분 / 주말 및 공휴일 제외)</Text>
      <Divider margin="0.75rem 0" color={COLOR.GRAY50} />
      <Text>사업자등록번호 : 274-12-01980 | 대표 : 최현권</Text>
      <Text margin={"0.25rem 0"}>
        주소 : 서울특별시 송파구 양재대로 1218, 107동 15층 1502호
      </Text>
      <Text margin={"0 0 0.5rem 0"}>메일 : myplanit.unicorn@gmail.com</Text>
      <BorderText>Copyright ⓒ 2022 myplanit. All rights reserved.</BorderText>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 1.25rem;
  background-color: ${COLOR.WHITE};
`;

// FIXME : To be deleted  the logo is fixed
const DemoLogoDiv = styled.div`
  width: 120px;
  height: 24px;
  background-color: #8a93ab;
  float: left;
  padding-left: 0.25rem;
  p {
    font-weight: ${FONT_WEIGTHT.PRETENDARD_BOLD};
    font-size: 0.75rem;
    line-height: 1.5rem;
    letter-spacing: -0.01em;
    color: #ffffff;
  }
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
