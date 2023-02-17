import { ListIcon } from "../icon";
import IconButton from "./IconButton";

const ListButton = ({
  width = "2.5rem",
  height = "2.5rem",
  onClick: handleClick = () => {},
}) => {
  return (
    <IconButton width={width} height={height} onClick={handleClick}>
      <ListIcon />
    </IconButton>
  );
};

export default ListButton;
