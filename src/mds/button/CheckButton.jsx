import { COLOR } from "../../constants";
import { useToggle } from "../../hooks";
import { CheckIcon } from "../icon";
import IconButton from "./IconButton";

const CheckButton = ({
    width = "2.5rem",
    height = "2.5rem",
    checkedColor = COLOR.BRAND_COLOR,
    isChecked = false,
    onClick: handleClick,
}) => {
    return (
        <IconButton width={width} height={height} onClick={handleClick}>
            <CheckIcon isChecked={isChecked} checkedColor={checkedColor} />
        </IconButton>
    );
};

export default CheckButton;
