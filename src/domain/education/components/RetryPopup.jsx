import styled from "styled-components";

import { COLOR } from "../../../constants";
import { PopUpContentBox, PopUpLayout } from "../../../mds/popup";
import { BodyM, BodyS, BodyXS } from "../../../mds/text";

const RetryPopup = ({ onClose: handleClose = () => {} }) => {
    return (
        <PopUpLayout onClick={handleClose}>
            <PopUpContentBox padding={"2rem 1rem 0 1rem"}>
                <BodyM margin={"0 0 0.25rem 0"}>
                    잊지말고 꼭 다시 도전하세요!
                </BodyM>
                <BodyS fontColor={COLOR.MAIN500}>
                    해당 클래스는 마이페이지에서
                </BodyS>
                <BodyS fontColor={COLOR.MAIN500}>
                    다시 확인 및 도전이 가능해요!
                </BodyS>
                <Button onClick={handleClose}>
                    <BodyXS>확인</BodyXS>
                </Button>
            </PopUpContentBox>
        </PopUpLayout>
    );
};

export default RetryPopup;

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
