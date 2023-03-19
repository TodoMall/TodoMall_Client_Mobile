import { ListIcon } from "../icon";
import IconButton from "./IconButton";

const ListButton = ({ onClick: handleClick = () => {} }) => {
    return (
        <IconButton onClick={handleClick}>
            <ListIcon />
        </IconButton>
    );
};

export default ListButton;
