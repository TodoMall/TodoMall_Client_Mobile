import { COLOR } from "../../constants";

const CheckIcon = ({ isChecked = false }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width="24"
                height="24"
                rx="8"
                fill={isChecked ? COLOR.MAIN500 : COLOR.GRAY200}
            />
            <path
                d="M6.52637 12.4212L9.89479 15.7896L16.6316 9.05273"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CheckIcon;
