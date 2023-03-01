import styled from "styled-components";

import { COLOR } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { PopUpContentBox, PopUpLayout } from "../../../mds/popup";
import { BodyM, BodyS, BodyXS } from "../../../mds/text";

const LogoutPopup = () => {
    const handleLogout = () => {
        // logout logic
    };

    return (
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
export default LogoutPopup;

const Button = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 3.25rem;
    color: ${props => props.fontColor};
`;
