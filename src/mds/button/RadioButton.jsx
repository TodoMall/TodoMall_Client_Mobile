import { useToggle } from "../../hooks";
import { RadioIcon } from "../icon";
import IconButton from "./IconButton";

const RadioButton = ({ isChecked = false }) => {
    const [status, _, handleStatus] = useToggle(isChecked);

    return (
        <IconButton onClick={handleStatus}>
            <RadioIcon isChecked={status} />
        </IconButton>
    );
};

export default RadioButton;
