import styled from "styled-components";

import { COLOR, FONT_STYLE } from "../constants";
import { useToggle } from "../hooks";
import { DetailBoxCoulmn } from "../mds";
import { RowBox } from "../mds/box";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { PopUpContentBox, PopUpLayout } from "../mds/popup";
import { BodyM, BodyS } from "../mds/text";

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
                    {isShowLogoutToggle && (
                        <PopUpLayout>
                            <PopUpContentBox padding={"2rem 1rem 0 1rem"}>
                                <BodyM>정말 로그아웃 하시겠습니까?</BodyM>
                                <BodyS fontColor={COLOR.BRAND_COLOR}>
                                    로그아웃을 하시면 중요한 알림을
                                </BodyS>
                                <BodyS fontColor={COLOR.BRAND_COLOR}>
                                    받아보실 수 없습니다!
                                </BodyS>
                                <RowBox margin={"2rem 0 0 0"}>
                                    <Button
                                        onClick={handleLogout}
                                        fontColor={COLOR.BRAND_COLOR}
                                    >
                                        로그아웃
                                    </Button>
                                    <Button>취소</Button>
                                </RowBox>
                            </PopUpContentBox>
                        </PopUpLayout>
                    )}
                </AccountItem>

                <AccountItem onClick={handleUnSignUpToggle}>
                    <DetailBoxCoulmn justifyContent={"space-between"}>
                        <BodyM>회원탈퇴</BodyM>
                    </DetailBoxCoulmn>
                    {isShowUnSignUpToggle && (
                        <PopUpLayout>
                            <PopUpContentBox padding={"2rem 1rem 0 1rem"}>
                                <BodyM>정말로 탈퇴하시겠습니까?</BodyM>
                                <BodyS fontColor={COLOR.ERROR500}>
                                    지금까지 인증한 모든 도전기록은
                                </BodyS>
                                <BodyS fontColor={COLOR.ERROR500}>
                                    복구하실 수 없습니다.
                                </BodyS>
                                <RowBox margin={"2rem 0 0 0"}>
                                    <Button
                                        onClick={handleDeleteAccount}
                                        fontColor={COLOR.ERROR500}
                                    >
                                        로그아웃
                                    </Button>
                                    <Button>취소</Button>
                                </RowBox>
                            </PopUpContentBox>
                        </PopUpLayout>
                    )}
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
