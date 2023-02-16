import { COLOR } from "../../constants";

const RadioIcon = ({ isChecked = false }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="11"
        fill="white"
        stroke={isChecked ? COLOR.MAIN500 : COLOR.GRAY200}
        strokeWidth="2"
      />
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="5"
        fill={isChecked ? COLOR.MAIN500 : null}
      />
    </svg>
  );
};

export default RadioIcon;
