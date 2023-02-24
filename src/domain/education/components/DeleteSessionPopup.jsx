import styled from "styled-components";

import { COLOR } from "../../../constants";
import { PopUpContentBox, PopUpLayout } from "../../../mds/popup";
import { BodyM, BodyS, BodyXS } from "../../../mds/text";

const DeleteSessionPopup = ({ onClose: handleClose = () => {} }) => {
    return (
        <PopUpLayout onClick={handleClose}>
            <PopUpContentBox padding={"2rem 1rem 0 1rem"}>
                <BodyM margin={"0 0 0.25rem 0"}>너무 슬퍼하지 말아요</BodyM>
                <BodyS fontColor={COLOR.MAIN500}>
                    인증한 세션의 정보는 마이페이지에서
                </BodyS>
                <BodyS fontColor={COLOR.MAIN500}>
                    다시 확인하실 수 있어요!
                </BodyS>
                <Button onClick={handleClose}>
                    <BodyXS fontColor={COLOR.GRAY900}>확인</BodyXS>
                </Button>
            </PopUpContentBox>
        </PopUpLayout>
    );
};

export default DeleteSessionPopup;

const Button = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 3.25rem;
    color: ${props => props.fontColor};
    margin-top: 2rem;
`;
