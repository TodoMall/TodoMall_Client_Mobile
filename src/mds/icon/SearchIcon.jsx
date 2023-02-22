import { COLOR } from "../../constants";

const SearchIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="f78161fe6766498e26ff2884ba262db1">
                <g id="a8663353672ff598bcd151630a723a64">
                    <circle
                        id="67e15e8fa580a823575fb16afb548934"
                        cx="10.5"
                        cy="10.498"
                        r="7.5"
                        stroke={COLOR.GRAY400}
                        strokeWidth="2"
                    ></circle>
                    <path
                        id="5a0c55826b32e667c4864d72a34289e7"
                        d="M16 15.998L20 19.998"
                        stroke={COLOR.GRAY400}
                        strokeWidth="2"
                        strokeLinecap="round"
                    ></path>
                </g>
            </g>
        </svg>
    );
};

export default SearchIcon;
