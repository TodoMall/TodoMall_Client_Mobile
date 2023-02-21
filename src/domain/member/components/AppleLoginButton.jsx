import { useLogin } from "../hooks";
import { PROVIDERS } from "../../../constants/providers";
import { BasicButton } from "../../../mds/button";
import { COLOR } from "../../../constants";

const AppleLoginButton = () => {
  const { signIn, data, loading, error } = useLogin(PROVIDERS.APPLE);

  const onClickLoginButton = () => {
    signIn();
  }

  return (
      <BasicButton backgroundColor={COLOR.WHITE} fontColor="#222222" onClick={onClickLoginButton}>
        Apple로 계속하기
      </BasicButton>
  )
}

export default AppleLoginButton;