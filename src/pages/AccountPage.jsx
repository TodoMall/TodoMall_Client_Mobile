import styled from "styled-components";

import { FONT_STYLE } from "../constants";
import { DeleteAccountPopup, LogoutPopup } from "../domain/auth/components";
import { useToggle } from "../hooks";
import { DetailBoxCoulmn } from "../mds";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyM } from "../mds/text";

const AccountPage = () => {
    const [isShowLogoutToggle, __, handleLogoutToggle] = useToggle();
    const [isShowUnSignUpToggle, _, handleUnSignUpToggle] = useToggle();

    const handleLogout = () => {
        // TODO : logout logic
    };
    const handleDeleteAccount = () => {
        // TODO : unSignUp logic
    };

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

const Button = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 3.25rem;
    color: ${props => props.fontColor};
    font-weight: ${FONT_STYLE.PRETENDARD_125.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_125.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_125.HEIGHT};
`;
