import styled from "styled-components";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { DetailBoxCoulmn } from "../mds";
import { useNavigate } from "react-router-dom";
import { PATH } from "../constants";
import { BodyM } from "../mds/text";

const TermsPage = () => {
  const navigate = useNavigate();

  const handleServiceTermsPage = () => navigate(PATH.SERVICE);
  const handlePersonalTermsPage = () => navigate(PATH.PERSONAL);

  return (
    <Container>
      <BasicHeader pageDescription={"설정"} />

      <ItemContainer>
        <TermsItem onClick={handleServiceTermsPage}>
          <DetailBoxCoulmn justifyContent={"space-between"}>
            <BodyM>서비스 이용약관</BodyM>
          </DetailBoxCoulmn>
        </TermsItem>

        <TermsItem onClick={handlePersonalTermsPage}>
          <DetailBoxCoulmn justifyContent={"space-between"}>
            <BodyM>개인정보처리방침</BodyM>
          </DetailBoxCoulmn>
        </TermsItem>
      </ItemContainer>
    </Container>
  );
};
export default TermsPage;
const Container = styled.div``;
const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
`;

const TermsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 52px;
`;
