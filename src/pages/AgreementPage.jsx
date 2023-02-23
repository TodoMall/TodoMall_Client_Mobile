import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { PROVIDERS } from "../constants/providers";
import { AgreementButtonBox } from "../domain/auth/components";
import { useLogin } from "../domain/member/hooks";

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

    useEffect(() => {
        signInWithKakao();
    }, []);
    return <AgreementButtonBox />;
};

export default AgreementPage;
