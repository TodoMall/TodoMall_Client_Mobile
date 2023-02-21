import {TextButton} from "../../../mds/button";
import {COLOR, FONT_STYLE, PATH} from "../../../constants";
import {useNavigate} from "react-router-dom";

const GuestLoginButton = () => {
  const navigator = useNavigate();

  const onClickGuestLoginButton = () => {
    navigator(PATH.STORE);
  }

  return (
      <TextButton
          fontSize={FONT_STYLE.PRETENDARD_200.SIZE}
          fontWeight={FONT_STYLE.PRETENDARD_200.WEIGTHT}
          lineHeight={FONT_STYLE.PRETENDARD_200.HEIGHT}
          fontColor={COLOR.BLACK}
          onClick={onClickGuestLoginButton}
      >
        게스트로 둘러보기
      </TextButton>
  )
}

export default GuestLoginButton;