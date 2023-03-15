import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useMutation } from "@apollo/client";

import { updateMemberAlarmStatusAgreement } from "../apollo/domain/member";
import { LOCAL_STORAGE_KEYS, PATH } from "../constants";
import { useLocalStorage } from "../hooks";
import { DetailBoxCoulmn, ToggleSwitch } from "../mds";
import { RowBox } from "../mds/box";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyM, BodyS } from "../mds/text";

const SettingPage = () => {
    const navigate = useNavigate();
    const { IS_PUSHALARM_AGREE, IS_MARKETINGALARM_AGREE } = LOCAL_STORAGE_KEYS;
    const { memberId = "e155ad7c-3547-4312-b09c-b3729c0b18c3" } = {
        ...localStorage,
    };

    const [updatePushAlarmStatus] = useMutation(
        updateMemberAlarmStatusAgreement
    );

    const [isAgreePush, setIsAgreePush] = useLocalStorage(
        IS_PUSHALARM_AGREE,
        false
    );
    const [isAgreeMarketing, setIsAgreeMarketing] = useLocalStorage(
        IS_MARKETINGALARM_AGREE,
        false
    );

    const handlePushStatus = () => {
        updatePushAlarmStatus({
            variables: {
                memberId: memberId,
                isMarketingAlarmAgree: isAgreeMarketing,
                isPushAlarmAgree: !isAgreePush,
            },
            onCompleted: () => {
                setIsAgreePush(prev => !prev);
            },
        });
    };
    const handleMarketingStatus = () => {
        updatePushAlarmStatus({
            variables: {
                memberId: memberId,
                isMarketingAlarmAgree: !isAgreeMarketing,
                isPushAlarmAgree: isAgreePush,
            },
            onCompleted: () => {
                setIsAgreeMarketing(prev => !prev);
            },
        });
    };

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
                        <ToggleSwitch
                            onClick={handlePushStatus}
                            isChecked={isAgreePush}
                        />
                    </RowBox>
                </SettingItem>

                <SettingItem>
                    <RowBox>
                        <BodyM>광고성 정보 수신 동의</BodyM>
                        <ToggleSwitch
                            onClick={handleMarketingStatus}
                            isChecked={isAgreeMarketing}
                        />
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
