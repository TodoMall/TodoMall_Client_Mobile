import { COLOR } from "../../constants";

const UnderArrowIcon = ({ color = COLOR.WHITE }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="aa0fce418b095c3f6b4b5abc2d0f6664">
                <path
                    id="691270fd066cd632e1967191e4ca8bec"
                    d="M7 10L12 15L17 10"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </g>
        </svg>
    );
};

export default UnderArrowIcon;
