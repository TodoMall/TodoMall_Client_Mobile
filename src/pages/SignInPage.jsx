import styled from "styled-components";

import { COLOR } from "../constants";
import {
    AppleSignInButton,
    GuestSignInButton,
    KakaoSignInButton,
} from "../domain/auth/components";
import { BookClipImage, BrandLogoIWithTextImage } from "../mds/image";

const LoginPage = () => {
    return (
        <Container>
            <BookClipImage />

            <BrandLogoContainer>
                <BrandLogoIWithTextImage />
            </BrandLogoContainer>

            <ButtonContainer>
                <KakaoSignInButton />
                <AppleSignInButton />
                <GuestSignInButton />
            </ButtonContainer>
        </Container>
    );
};

export default LoginPage;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    background-color: ${COLOR.BRAND_COLOR};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BrandLogoContainer = styled.div`
    margin-top: 6.468rem;
`;

const ButtonContainer = styled.div`
    width: 100%;
    max-width: 22.375rem;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin: 7.5rem 0 1.25rem;
    gap: 0.5rem;
`;
