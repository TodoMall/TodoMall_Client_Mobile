import { COLOR } from "../../constants";
import { UnderArrowIcon } from "../icon";
import IconButton from "./IconButton";

const UnderArrowButton = ({
    onClick: handleClick = () => {},
    color = COLOR.WHITE,
}) => {
    return (
        <IconButton onClick={handleClick}>
            <UnderArrowIcon color={color} />
        </IconButton>
    );
};

export default UnderArrowButton;
