import IconButton from "./IconButton";
import { SearchIcon } from "../icon";

const SearchButton = ({ onClick: handleClick = () => {} }) => {
  return (
    <IconButton onClick={handleClick}>
      <SearchIcon />
    </IconButton>
  );
};

export default SearchButton;
