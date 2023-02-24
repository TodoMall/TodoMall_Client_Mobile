import styled from "styled-components";

import { COLOR } from "../../../constants";
import { BrandLogo } from "../../../mds/icon";
import { PopUpLayout } from "../../../mds/popup";
import { BodyM } from "../../../mds/text";
import { AppleLoginButton, KakaoLoginButton } from "../../member/components";

const LoginPopup = () => {
    return (
        <PopUpLayout>
            <LoginPopupBox>
                <BrandLogo />
                <BodyM margin={"0.75rem 0 2.438rem 0"}>
                    로그인이 필요한 서비스입니다.
                </BodyM>
                <KakaoLoginButton />
                <AppleLoginButton />
            </LoginPopupBox>
        </PopUpLayout>
    );
};

export default LoginPopup;

const LoginPopupBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: calc(100% - 2rem);
    height: 18.625rem;
    padding: 2rem 1rem 0 1rem;
    border-radius: 1.25rem;
    background-color: ${COLOR.WHITE};
`;
