import styled from "styled-components";

import { COLOR, KAKAO } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { PopUpContentBox, PopUpLayout } from "../../../mds/popup";
import { BodyM, BodyS, BodyXS } from "../../../mds/text";

const LogoutPopup = () => {
    const handleLogout = () => {
        window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO.CLIENT_ID}&logout_redirect_uri=${KAKAO.LOGOUT_REDIRECT_URI}`;
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
                    <Button onClick={handleLogout}>
                        <BodyXS fontColor={COLOR.BRAND_COLOR}>로그아웃</BodyXS>
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
