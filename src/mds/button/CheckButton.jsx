import { useToggle } from "../../hooks";
import { CheckIcon } from "../icon";
import IconButton from "./IconButton";

const CheckButton = ({
    width = "2.5rem",
    height = "2.5rem",
    isChecked = false,
}) => {
    const [status, _, handleStatus] = useToggle(isChecked);

    return (
        <IconButton width={width} height={height} onClick={handleStatus}>
            <CheckIcon isChecked={status} />
        </IconButton>
    );
};

export default CheckButton;
