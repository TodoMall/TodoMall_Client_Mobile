import { useMutation } from "@apollo/client";

import {
    signInWithApple,
    signInWithKakao,
} from "../../../apollo/domain/member";
import { PROVIDERS } from "../../../constants/providers";

const useLogin = (provider = PROVIDERS.KAKAO) => {
    const [signIn, { data, loading, error }] = useMutation(
        getSignInMutation(provider)
    );

    return { signIn, data, loading, error };
};

export default useLogin;

const getSignInMutation = provider => {
    switch (provider) {
        case PROVIDERS.KAKAO:
            return signInWithKakao;
        case PROVIDERS.APPLE:
            return signInWithApple;
        default:
            throw new Error("Invalid provider");
    }
};
