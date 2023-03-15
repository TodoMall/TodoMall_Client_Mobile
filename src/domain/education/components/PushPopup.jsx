import styled from "styled-components";

import { useMutation } from "@apollo/client";

import { updateMemberAlarmStatusAgreement } from "../../../apollo/domain/member";
import { COLOR, LOCAL_STORAGE_KEYS } from "../../../constants";
import { useLocalStorage } from "../../../hooks";
import { RowBox } from "../../../mds/box";
import { PopUpContentBox, PopUpLayout } from "../../../mds/popup";
import { BodyM, BodyS, BodyXS } from "../../../mds/text";

const PushPopup = ({ onClose: handleClose = () => {} }) => {
    const { IS_PUSHALARM_AGREE, IS_MARKETINGALARM_AGREE } = LOCAL_STORAGE_KEYS;

    const [_, setIsAgreePush] = useLocalStorage(IS_PUSHALARM_AGREE, false);
    const [isAgreeMarketing] = useLocalStorage(IS_MARKETINGALARM_AGREE, false);

    const [updatePushAlarmStatus] = useMutation(
        updateMemberAlarmStatusAgreement
    );

    const handleAcceptPushAlarm = () => {
        setIsAgreePush(prev => !prev);
        updatePushAlarmStatus({
            variables: {
                // TODO : fix memberId value to stored localStorage memberId
                memberId: "e155ad7c-3547-4312-b09c-b3729c0b18c3",
                isMarketingAlarmAgree: isAgreeMarketing,
                isPushAlarmAgree: true,
            },
            onCompleted: () => {
                handleClose();
            },
        });
    };

    return (
        <PopUpLayout>
            <PopUpContentBox padding={"2rem 1rem 0 1rem"}>
                <BodyM margin={"0 0 0.25rem 0"}>
                    앱 내 푸시알림을 받아보실래요?
                </BodyM>
                <BodyS fontColor={COLOR.MAIN500}>
                    클래스 마감 기한 등 중요한 정보를
                </BodyS>
                <BodyS fontColor={COLOR.MAIN500}>알려드려요!</BodyS>
                <RowBox margin={"2rem 0 0 0"}>
                    <Button onClick={handleClose}>
                        <BodyXS>취소</BodyXS>
                    </Button>
                    <Button onClick={handleAcceptPushAlarm}>
                        <BodyXS fontColor={COLOR.MAIN500}>알림받기</BodyXS>
                    </Button>
                </RowBox>
            </PopUpContentBox>
        </PopUpLayout>
    );
};

export default PushPopup;

const Button = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 3.25rem;
    color: ${props => props.fontColor};
`;
