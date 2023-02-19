import { NotificationIcon } from "../icon";
import IconButton from "./IconButton";

const NotificationButton = ({ onClick: handleClick = () => {} }) => {
  return (
    <IconButton onClick={handleClick}>
      <NotificationIcon />
    </IconButton>
  );
};

export default NotificationButton;
