import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

import { COLOR } from "../constants";
import { useToggle } from "../hooks";

const ToggleSwitch = ({
    isChecked = false,
    onClick: handleClick = () => {},
}) => {
    const [toggleStatus, _, handleToggle] = useToggle(isChecked);
    const handleClickToggle = () => {
        handleClick();
        handleToggle();
    };

    return <CustomSwitch checked={toggleStatus} onClick={handleClickToggle} />;
};

export default ToggleSwitch;

const CustomSwitch = styled(Switch)`
    width: 52px;
    height: 24px;
    padding: 0;
    & .MuiSwitch-switchBase {
        padding: 0;
        margin: 2px;
        transition-duration: 300ms;
        &.Mui-checked {
            transform: translateX(27px);
            color: #fff;
            & + .MuiSwitch-track {
                background-color: ${COLOR.BRAND_COLOR};
                opacity: 1;
            }
        }
    }
    & .MuiSwitch-thumb {
        width: 20px;
        height: 20px;
    }
    & .MuiSwitch-track {
        border-radius: 20px;
        background-color: ${COLOR.GRAY200};
        opacity: 1;
    }
`;
