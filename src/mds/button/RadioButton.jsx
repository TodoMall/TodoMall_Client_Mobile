import { RadioIcon } from "../icon";
import { useToggle } from "../../hooks";
import IconButton from "./IconButton";

const RadioButton = ({
  width = "2.5rem",
  height = "2.5rem",
  isChecked = false,
}) => {
  const [status, _, handleStatus] = useToggle(isChecked);

  return (
    <IconButton width={width} height={height} onClick={handleStatus}>
      <RadioIcon isChecked={status} />
    </IconButton>
  );
};

export default RadioButton;
