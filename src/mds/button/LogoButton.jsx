import { useNavigate } from "react-router-dom";
import { BrandLogo } from "../icon";
import { PATH } from "../../constants";
import IconButton from "./IconButton";

const LogoButton = ({ width = "auto", height = "auto" }) => {
  const navigate = useNavigate();
  const handleMainPage = () => navigate(PATH.MAIN);

  return (
    <IconButton width={width} height={height} onClick={handleMainPage}>
      <BrandLogo />
    </IconButton>
  );
};

export default LogoButton;
