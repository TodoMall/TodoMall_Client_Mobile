import { useMutation } from "@apollo/client";

import { signInWithKakao, signInWithApple } from "../../../apollo/domain/member";
import { PROVIDERS } from "../../../constants/providers";

export default function useLogin(provider = PROVIDERS.KAKAO) {
  const [signIn, { data, loading, error }] = useMutation(getSignInMutation(provider));

  return { signIn, data, loading, error };
}

const getSignInMutation = (provider) => {
  switch (provider) {
    case PROVIDERS.KAKAO:
      return signInWithKakao;
    case PROVIDERS.APPLE:
      return signInWithApple;
    default:
      return signInWithKakao;
  }
}