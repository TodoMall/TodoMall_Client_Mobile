import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { USER_TYPE } from "../constants/userType";

const RedirectByAuthStatus = () => {
  const navigate = useNavigate();
  const { access } = { ...localStorage };
  useEffect(() => {
    if (access === USER_TYPE.GUEST || !access) {
      return navigate("/");
    }
  }, [access, navigate]);
  return <></>;
};

export default RedirectByAuthStatus;
