import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { PROVIDERS } from "../constants/providers";
import { AgreementButtonBox } from "../domain/auth/components";
import { useLogin } from "../domain/member/hooks";
import { CheckMarkImage } from "../mds/image";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { HeadingXL } from "../mds/text";

const AgreementPage = () => {
    const [searchParams] = useSearchParams();
    const { signIn, loading } = useLogin(PROVIDERS.KAKAO);
    const [accessToken, setAccessToken] = useState(null);

    const signInWithKakao = async () => {
        const code = searchParams.get("code");
        if (code) {
            const response = await signIn({
                variables: {
                    data: code,
                },
            });

            if (loading === false) {
                setAccessToken(response.data.signInWithKakao);
            }
        }
    };

    // useEffect(() => {
    //     signInWithKakao();
    // }, []);

    return (
        <>
            <BasicHeader pageDescription={"약관 동의"} />

            <Container>
                <TextContainer>
                    <HeadingXL>더 나은 학습을 위해</HeadingXL>
                    <HeadingXL>투두몰 약관에 동의해주세요</HeadingXL>
                </TextContainer>

                <ImageContainer>
                    <CheckMarkImage />
                </ImageContainer>

                <AgreementButtonBox />
            </Container>
        </>
    );
};

export default AgreementPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem 0 1.5rem;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
    margin: 0 auto 1.5rem auto;
`;
