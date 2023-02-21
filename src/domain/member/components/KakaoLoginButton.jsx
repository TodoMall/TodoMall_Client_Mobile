import { BasicButton } from "../../../mds/button";
import { useLogin } from "../hooks";
import { PROVIDERS } from "../../../constants/providers";

const KakaoLoginButton = () => {
  const { signIn, data, loading, error } = useLogin(PROVIDERS.KAKAO);

  const onClickLoginButton = () => {
    signIn();
  }

  return (
      <BasicButton backgroundColor="#FEE500" fontColor="#222222" onClick={onClickLoginButton}>
        Kakao로 계속하기
      </BasicButton>
  )
}

export default KakaoLoginButton;
