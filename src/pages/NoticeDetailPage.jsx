import { Card } from "../mds";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { COLOR } from "../constants";
import { RowBox } from "../mds/box";
import { NoticeIcon } from "../mds/icon";
import { useLocation } from "react-router-dom";
import { BodyL, BodyM, BodyXXS } from "../mds/text";
import styled from "styled-components";

const NoticeDetailPage = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  return (
    <Container>
      <BasicHeader pageDescription={"공지사항"} />
      <CardContainer>
        <Card
          height="100%"
          justifyContent={"none"}
          margin={"0.25rem 0"}
          backgroundColor={COLOR.GRAY100}
        >
          <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
            <IconContainer>
              <NoticeIcon />
              <BodyXXS fontColor={COLOR.GRAY500} margin={"0 0 0 0.25rem"}>
                공지사항
              </BodyXXS>
            </IconContainer>
            <BodyXXS fontColor={COLOR.GRAY500}>2023.01.28</BodyXXS>
          </RowBox>
          <BodyL>{"2023년 3월 2일자 개인정보처리방침이 변경됐습니다."}</BodyL>
          <ContentContainer>
            <BodyM fontColor={COLOR.GRAY900}>변경 내용</BodyM>
            <BodyM fontColor={COLOR.GRAY900}>
              변경 내용 개인정보 위탁자 : 앰플리튜드(Amplitude)가추가 개인정보
              수집 항목 : (선택) 주소, (선택) 여자친구 유무? 고지 : 2023년 3월
              2일
            </BodyM>
          </ContentContainer>
        </Card>
      </CardContainer>
    </Container>
  );
};
export default NoticeDetailPage;

const Container = styled.div``;
const CardContainer = styled.div`
  height: 90vh;
  padding: 0.75rem 1rem;
`;

const IconContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  margin-top: 1.5rem;
`;
