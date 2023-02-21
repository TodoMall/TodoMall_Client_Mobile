import { NextArrowIcon } from "../icon";
import IconButton from "./IconButton";

const NextArrowButton = ({ onClick: handleClick = () => {} }) => {
  return (
    <IconButton onClick={handleClick}>
      <NextArrowIcon />
    </IconButton>
  );
};

export default NextArrowButton;
