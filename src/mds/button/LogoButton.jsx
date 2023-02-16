import { useNavigate } from "react-router-dom";
import { BrandLogo } from "../icon";
import { PATH } from "../../constants";
import IconButton from "./IconButton";

const LogoButton = () => {
  const navigate = useNavigate();
  const handleMainPage = () => navigate(PATH.MAIN);

  return (
    <IconButton onClick={handleMainPage}>
      <BrandLogo />
    </IconButton>
  );
};

export default LogoButton;
