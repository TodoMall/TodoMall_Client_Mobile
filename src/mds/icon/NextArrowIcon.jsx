import { COLOR } from "../../constants";

const NextArrowIcon = ({ color = COLOR.WHITE }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="3f0482690430772804646c9c1c77aa5a">
                <g id="91c9a92e6de1afd5d91da26cf2ed4516">
                    <path
                        id="062be0ac8a301369cf58d123850a22d2"
                        d="M10 18L16 12L10 6"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </g>
        </svg>
    );
};

export default NextArrowIcon;
