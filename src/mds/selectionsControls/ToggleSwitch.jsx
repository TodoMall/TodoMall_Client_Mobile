import { styled } from "@mui/material/styles";
import { COLOR } from "../../constants";
import useToggle from "../../hooks/useToggle";
import Switch from "@mui/material/Switch";

const CustomSwitch = styled((props) => <Switch {...props} />)(() => ({
  width: 52,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(27px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: COLOR.BRAND_COLOR,
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: COLOR.GRAY200,
    opacity: 1,
  },
}));

const ToggleSwitch = ({ initialValue = false }) => {
  const [isChecked, _, handleCheck] = useToggle(initialValue);
  return <CustomSwitch checked={isChecked} onClick={handleCheck} />;
};

export default ToggleSwitch;
