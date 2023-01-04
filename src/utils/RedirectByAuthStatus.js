import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectByAuthStatus = () => {
  const navigate = useNavigate();
  const { access } = { ...localStorage };
  useEffect(() => {
    if (!access) {
      return navigate("/");
    }
  }, [access, navigate]);
  return <></>;
};

export default RedirectByAuthStatus;
