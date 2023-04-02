import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, GNB, LOCAL_STORAGE_KEYS, PATH } from "../../../constants";
import { LoginPopup } from "../../../domain/auth/components";
import { useLocalStorage, usePopup } from "../../../hooks";
import { RowBox } from "../../box";
import { EducationButton, MyPageButton, StoreButton } from "../../button";

const GlobalNavBar = () => {
    const { pathname } = useLocation();

    const setCurrentLocation = () => {
        for (const key in GNB) {
            if (pathname.includes(GNB[key])) {
                return GNB[key];
            }
        }
    };

    const navigate = useNavigate();
    const [isGuest] = useLocalStorage(LOCAL_STORAGE_KEYS.IS_GUEST, false);
    const [isCurrent, setIsCurrent] = useState(setCurrentLocation());
    const [isLoginPopup, handleOpen, handleClose] = usePopup(false);

    const handleStorePage = () => {
        setIsCurrent(GNB.STORE);
        navigate(PATH.STORE);
    };

    const handleEducationPage = () => {
        if (isGuest) {
            handleOpen();
        } else {
            setIsCurrent(GNB.MYCOURSE);
            navigate(PATH.MYCOURSE);
        }
    };

    const handleMyPagePage = () => {
        if (isGuest) {
            handleOpen();
        } else {
            setIsCurrent(GNB.MYPAGE);
            navigate(PATH.MYPAGE);
        }
    };

    return (
        <Container>
            <RowBox>
                <StoreButton isCurrent={isCurrent} onClick={handleStorePage} />
                <EducationButton
                    isCurrent={isCurrent}
                    onClick={handleEducationPage}
                />
                <MyPageButton
                    isCurrent={isCurrent}
                    onClick={handleMyPagePage}
                />
            </RowBox>
            {isLoginPopup && <LoginPopup onClose={handleClose} />}
        </Container>
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
