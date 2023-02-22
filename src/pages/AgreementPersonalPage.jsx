import styled from "styled-components";

import { BasicButton } from "../mds/button";
import { AgreementPersonalTableImage } from "../mds/image";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyXL } from "../mds/text";

const AgreementPersonalPage = ({ onClick: handleClick = () => {} }) => {
    return (
        <Container>
            <BasicHeader pageDescription={"개인정보 수집 및 이용 동의"} />
            <PageContainer>
                <BoldText margin={"0.75rem 0 1.125rem 0"}>
                    마이플랜잇은 아래의 목적으로 개인정보를 수집 및 이용하며,
                    회원의 소중한 개인정보를 보호함으로써 안심하고 서비스를
                    이용할 수 있도록 최선을 다합니다.
                </BoldText>
                <AgreementPersonalTableImage />
                <BoldText margin={"1rem 0 1.125rem 0"}>
                    귀하는 위의 개인정보 수집 및 이용에 대해 동의를 거부할
                    권리가 있습니다. 그러나 동의를 거부할 경우 회원가입이 어려울
                    수 있습니다.
                </BoldText>
                <BasicButton onClick={handleClick}>
                    <BodyXL>동의합니다</BodyXL>
                </BasicButton>
            </PageContainer>
        </Container>
    );
};

export default AgreementPersonalPage;

const Container = styled.div``;

const PageContainer = styled.div`
    padding: 0 1rem;
`;

const BoldText = styled.p`
    margin: ${props => props.margin};
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.01rem;
`;
