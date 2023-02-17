import { NotificationIcon } from "../icon";
import IconButton from "./IconButton";

const NotificationButton = ({
  width = "2.5rem",
  height = "2.5rem",
  onClick: handleClick = () => {},
}) => {
  return (
    <IconButton width={width} height={height} onClick={handleClick}>
      <NotificationIcon />
    </IconButton>
  );
};

export default NotificationButton;
