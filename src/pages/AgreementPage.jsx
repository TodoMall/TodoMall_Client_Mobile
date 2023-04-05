import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getMemberByEmail } from "../apollo/domain/member";
import { LOCAL_STORAGE_KEYS } from "../constants";
import { PROVIDERS } from "../constants/providers";
import { AgreementButtonGroup } from "../domain/auth/components";
import { useGetUserInfo } from "../domain/auth/hooks";
import { useLogin } from "../domain/member/hooks";
import { useLocalStorage } from "../hooks";
import { CheckMarkImage } from "../mds/image";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { HeadingXL } from "../mds/text";

const AgreementPage = () => {
    const { USER_ID, USER_EMAIL, USER_NAME, USER_IMAGE, ACCESS_TOKEN } =
        LOCAL_STORAGE_KEYS;

    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");

    const { signIn, loading: isLoading } = useLogin(PROVIDERS.KAKAO);

    const [, setAccessToken] = useLocalStorage(ACCESS_TOKEN, null);
    const [, setUserId] = useLocalStorage(USER_ID, null);
    const [userEmail, setUserEmail] = useLocalStorage(USER_EMAIL, null);
    const [, setUserImage] = useLocalStorage(USER_IMAGE, null);
    const [, setUserName] = useLocalStorage(USER_NAME, null);

    useQuery(getMemberByEmail, {
        variables: {
            email: userEmail,
        },
        skip: userEmail === null,
        onCompleted: data => {
            setUserId(data.getMemberByEmail.id);
        },
    });

    const signInWithKakao = async () => {
        if (code) {
            const response = await signIn({
                variables: {
                    data: code,
                },
            });
            if (!isLoading) {
                setAccessToken(response.data.signInWithKakao);
            }
        }
    };

    useEffect(async () => {
        signInWithKakao();
        const user = await useGetUserInfo(code);
        if (user) {
            setUserName(user.name);
            setUserEmail(user.email);
            setUserImage(user.image);
        }
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
