import { useSearchParams } from "react-router-dom";
import {useEffect, useState} from "react";

import { useLogin } from "../domain/member/hooks";
import { PROVIDERS } from "../constants/providers";

const AgreementPage = () => {
  const [searchParams] = useSearchParams();
  const { signIn, loading } = useLogin(PROVIDERS.KAKAO);
  const [accessToken, setAccessToken] = useState(null);

  const signInWithKakao = async () => {
    const code = searchParams.get("code");
    if (code) {
      const response = await signIn({
        variables: {
          data: code
        }
      });
      if (loading === false) {
        setAccessToken(response.data.signInWithKakao);
      }
    }
  }

  useEffect(() => {
    signInWithKakao();
  }, [])

  return <p>{
    loading ? "로딩중" : accessToken
  }</p>
}

export default AgreementPage;