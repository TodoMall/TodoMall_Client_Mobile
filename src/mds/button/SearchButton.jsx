import IconButton from "./IconButton";
import { SearchIcon } from "../icon";
import { useToggle } from "../../hooks";

const SearchButton = () => {
  const [state, setState, handleState] = useToggle();
  return (
    <IconButton onClick={() => {}}>
      <SearchIcon />
    </IconButton>
  );
};

export default SearchButton;
