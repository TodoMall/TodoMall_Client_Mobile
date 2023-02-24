import styled from "styled-components";

import { COLOR } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { PopUpContentBox, PopUpLayout } from "../../../mds/popup";
import { BodyM, BodyS, BodyXS } from "../../../mds/text";

const PushPopup = ({ onClose: handleClose = () => {} }) => {
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
                        <BodyXS fontColor={COLOR.GRAY900}>취소</BodyXS>
                    </Button>
                    <Button>
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
