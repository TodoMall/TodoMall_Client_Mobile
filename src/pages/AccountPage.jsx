import styled from "styled-components";

import { DeleteAccountPopup, LogoutPopup } from "../domain/auth/components";
import { useToggle } from "../hooks";
import { DetailBoxCoulmn } from "../mds";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyM } from "../mds/text";

const AccountPage = () => {
    const [isShowLogoutToggle, , handleLogoutToggle] = useToggle();
    const [isShowUnSignUpToggle, , handleUnSignUpToggle] = useToggle();

    return (
        <Container>
            <BasicHeader pageDescription={"설정"} />
            <ItemContainer>
                <AccountItem onClick={handleLogoutToggle}>
                    <DetailBoxCoulmn justifyContent={"space-between"}>
                        <BodyM>로그아웃</BodyM>
                    </DetailBoxCoulmn>
                    {isShowLogoutToggle && <LogoutPopup />}
                </AccountItem>

                <AccountItem onClick={handleUnSignUpToggle}>
                    <DetailBoxCoulmn justifyContent={"space-between"}>
                        <BodyM>회원탈퇴</BodyM>
                    </DetailBoxCoulmn>
                    {isShowUnSignUpToggle && <DeleteAccountPopup />}
                </AccountItem>
            </ItemContainer>
        </Container>
    );
};
export default AccountPage;

const Container = styled.div``;

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
`;

const AccountItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 3.25rem;
`;
