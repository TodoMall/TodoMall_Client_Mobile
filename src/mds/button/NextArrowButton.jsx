import { COLOR } from "../../constants";
import { NextArrowIcon } from "../icon";
import IconButton from "./IconButton";

const NextArrowButton = ({
    onClick: handleClick = () => {},
    color = COLOR.WHITE,
}) => {
    return (
        <IconButton onClick={handleClick}>
            <NextArrowIcon color={color} />
        </IconButton>
    );
};

export default NextArrowButton;
