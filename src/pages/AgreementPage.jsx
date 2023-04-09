import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { LOCAL_STORAGE_KEYS } from "../constants";
import { PROVIDERS } from "../constants/providers";
import { AgreementButtonGroup } from "../domain/auth/components";
import { useLogin } from "../domain/member/hooks";
import { useLocalStorage } from "../hooks";
import { CheckMarkImage } from "../mds/image";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { HeadingXL } from "../mds/text";

const AgreementPage = () => {
    const { USER_ID, ACCESS_TOKEN } = LOCAL_STORAGE_KEYS;

    const [searchParams] = useSearchParams();

    const code = searchParams.get("code");

    const { signIn } = useLogin(PROVIDERS.KAKAO);

    const [, setAccessToken] = useLocalStorage(ACCESS_TOKEN, null);
    const [, setUserId] = useLocalStorage(USER_ID, null);

    const signInWithKakao = async () => {
        if (code) {
            await signIn({
                variables: {
                    data: code,
                },
                onCompleted: async data => {
                    setAccessToken(data.signInWithKakao);
                    const { user: userId } = jwt_decode(data.signInWithKakao);
                    setUserId(userId);
                },
            });
        }
    };

    useEffect(() => {
        signInWithKakao();
    }, []);

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

                <AgreementButtonGroup />
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
