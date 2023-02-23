import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, FONT_STYLE, PATH } from "../../../constants";
import { TextButton } from "../../../mds/button";
import NextArrowIcon from "../../../mds/icon/NextArrowIcon";

const GuestSignInButton = () => {
    const navigator = useNavigate();

    const onClickGuestLoginButton = () => {
        navigator(PATH.STORE);
    };

    return (
        <TextButton
            height="1.5rem"
            margin="0"
            fontSize={FONT_STYLE.PRETENDARD_225.SIZE}
            fontWeight={FONT_STYLE.PRETENDARD_225.WEIGTHT}
            lineHeight={FONT_STYLE.PRETENDARD_225.HEIGHT}
            fontColor={COLOR.WHITE}
            onClick={onClickGuestLoginButton}
        >
            <ItemContainer>
                게스트로 둘러보기
                <NextArrowIcon />
            </ItemContainer>
        </TextButton>
    );
};

export default GuestSignInButton;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
`;
