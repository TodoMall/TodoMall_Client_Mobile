import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PATH } from "../constants";
import { DetailBoxCoulmn } from "../mds";
import ToggleSwitch from "../mds/ToggleSwitch";
import { RowBox } from "../mds/box";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyM, BodyS } from "../mds/text";

const SettingPage = () => {
    const navigate = useNavigate();

    // TODO: medo stataus , to be deleted
    const { isAcceptAlarm = true, isAcceptMarketing } = { ...localStorage };

    const handleTermsPage = () => navigate(PATH.TERMS);
    const handleAccountPage = () => navigate(PATH.ACCOUNT);

    return (
        <Container>
            <BasicHeader pageDescription={"설정"} />
            <ItemContainer>
                <BodyS margin={"1rem 0 0.5rem 0"}>앱 버전</BodyS>

                <SettingItem>
                    <RowBox>
                        <BodyM>앱 버전</BodyM>
                        <BodyM>2.00.01 ver</BodyM>
                    </RowBox>
                </SettingItem>

                <BodyS margin={"1rem 0 0.5rem 0"}>설정</BodyS>

                <SettingItem onClick={handleTermsPage}>
                    <DetailBoxCoulmn>
                        <BodyM>약관안내</BodyM>
                    </DetailBoxCoulmn>
                </SettingItem>

                <SettingItem onClick={handleAccountPage}>
                    <DetailBoxCoulmn>
                        <BodyM>계정관리</BodyM>
                    </DetailBoxCoulmn>
                </SettingItem>

                <BodyS margin={"1rem 0 0.5rem 0"}>알림설정</BodyS>

                <SettingItem>
                    <RowBox>
                        <BodyM>앱 내 푸시 알림 수신 동의</BodyM>
                        <ToggleSwitch isChecked={isAcceptAlarm} />
                    </RowBox>
                </SettingItem>

                <SettingItem>
                    <RowBox>
                        <BodyM>광고성 정보 수신 동의</BodyM>
                        <ToggleSwitch isChecked={isAcceptMarketing} />
                    </RowBox>
                </SettingItem>
            </ItemContainer>
        </Container>
    );
};
export default SettingPage;
const Container = styled.div``;
const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
`;

const SettingItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3.25rem;
`;
