import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH } from "../../../constants";
import { TextButton } from "../../../mds/button";
import NextArrowIcon from "../../../mds/icon/NextArrowIcon";
import { BodyL } from "../../../mds/text";

const GuestSignInButton = () => {
    const navigator = useNavigate();

    const onClickGuestLoginButton = () => {
        navigator(PATH.STORE);
    };

    return (
        <TextButton
            height="1.5rem"
            margin="0"
            fontColor={COLOR.WHITE}
            onClick={onClickGuestLoginButton}
        >
            <ItemContainer>
                <BodyL>게스트로 둘러보기</BodyL>
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
