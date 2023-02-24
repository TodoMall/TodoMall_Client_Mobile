import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, GNB, LOCAL_STORAGE_KEYS, PATH } from "../../../constants";
import { LoginPopup } from "../../../domain/auth/components";
import { useLocalStorage, useToggle } from "../../../hooks";
import { RowBox } from "../../box";
import { EducationButton, MyPageButton, StoreButton } from "../../button";

const GlobalNavBar = () => {
    const navigate = useNavigate();
    const [isGuest] = useLocalStorage(LOCAL_STORAGE_KEYS.isGuest, true);
    const [isCurrent, setIsCurrent] = useState(GNB.EDUCATION);
    const [isShowLoginPopup, _, handleLoginPopup] = useToggle(false);

    const handleStorePage = () => {
        setIsCurrent(GNB.STORE);
        navigate(PATH.STORE);
    };

    const handleEducationPage = () => {
        if (isGuest) {
            handleLoginPopup;
        } else {
            setIsCurrent(GNB.EDUCATION);
            navigate(PATH.EDUCATION);
        }
    };

    const handleMyPagePage = () => {
        if (isGuest) {
            handleLoginPopup;
        } else {
            setIsCurrent(GNB.MYPAGE);
            navigate(PATH.MYPAGE);
        }
    };

    return (
        <>
            <Container onClick={handleLoginPopup}>
                <RowBox>
                    <StoreButton
                        isCurrent={isCurrent}
                        onClick={handleStorePage}
                    />
                    <EducationButton
                        isCurrent={isCurrent}
                        onClick={handleEducationPage}
                    />
                    <MyPageButton
                        isCurrent={isCurrent}
                        onClick={handleMyPagePage}
                    />
                </RowBox>
                {isShowLoginPopup && <LoginPopup />}
            </Container>
        </>
    );
};

export default GlobalNavBar;

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4rem;
    margin-top: 2rem;
    padding: 0.75rem 0 0 0;
    border-top: 0.063rem solid #f7f9fd;
    z-index: 2;
    background-color: ${COLOR.WHITE};
`;
