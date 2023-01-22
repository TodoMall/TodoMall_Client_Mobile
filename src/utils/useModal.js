import { useState } from "react";
import { USER_TYPE } from "../constants";

// TODO : renamed to useLoginModal
const useModal = (initialState) => {
  const { access } = { ...localStorage };
  const [isVisible, setIsVisible] = useState(initialState ?? true);

  const handleVisibleState = () => {
    setIsVisible((prevState) => !prevState);
  };
  const isGuest = access === USER_TYPE.GUEST;

  return { isVisible, handleVisibleState, isGuest };
};
export default useModal;
