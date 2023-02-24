import styled from "styled-components";

import { COLOR } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { PopUpContentBox, PopUpLayout } from "../../../mds/popup";
import { BodyM, BodyS, BodyXS } from "../../../mds/text";

const DeleteAccountPopup = () => {
    const handleDeleteAccount = () => {
        // delete account logic
    };
    return (
        <PopUpLayout>
            <PopUpContentBox padding={"2rem 1rem 0 1rem"}>
                <BodyM>정말로 탈퇴하시겠습니까?</BodyM>
                <BodyS fontColor={COLOR.ERROR500}>
                    지금까지 인증한 모든 도전기록은
                </BodyS>
                <BodyS fontColor={COLOR.ERROR500}>복구하실 수 없습니다.</BodyS>
                <RowBox margin={"2rem 0 0 0"}>
                    <Button
                        onClick={handleDeleteAccount}
                        fontColor={COLOR.ERROR500}
                    >
                        <BodyXS>로그아웃</BodyXS>
                    </Button>
                    <Button>
                        <BodyXS>취소</BodyXS>
                    </Button>
                </RowBox>
            </PopUpContentBox>
        </PopUpLayout>
    );
};
export default DeleteAccountPopup;

const Button = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 3.25rem;
    color: ${props => props.fontColor};
`;
