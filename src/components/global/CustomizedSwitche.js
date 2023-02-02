import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const IOSSwitch = styled((props) => (
  <Switch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
    onClick={props.onToggle}
  />
))(({ theme }) => ({
  width: 46,
  height: 26,
  padding: 0,
  margin: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#6B47FD",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 13,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const CustomizedSwitche = ({ onToggle }) => {
  return <IOSSwitch onToggle={onToggle} />;
};
export default CustomizedSwitche;
