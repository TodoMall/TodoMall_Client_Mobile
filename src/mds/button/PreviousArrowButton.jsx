import { PreviousArrowIcon } from "../icon";
import IconButton from "./IconButton";

const PreviousArrowButton = ({ onClick: handleClick = () => {} }) => {
    return (
        <IconButton onClick={handleClick}>
            <PreviousArrowIcon />
        </IconButton>
    );
};

export default PreviousArrowButton;
