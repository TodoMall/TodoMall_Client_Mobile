import { useNavigate } from "react-router-dom";

import { PATH } from "../../constants";
import { BrandLogo } from "../icon";
import IconButton from "./IconButton";

const LogoButton = () => {
    const navigate = useNavigate();
    const handleMainPage = () => navigate(PATH.MAIN);

    return (
        <IconButton width={"auto"} height={"auto"} onClick={handleMainPage}>
            <BrandLogo />
        </IconButton>
    );
};

export default LogoButton;
