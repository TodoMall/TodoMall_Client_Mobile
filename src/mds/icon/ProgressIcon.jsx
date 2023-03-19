import { COLOR } from "../../constants";

const ProgressIcon = ({ color = COLOR.BRAND_COLOR }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="b7b585542a14ca7299f942db5e6d1248"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4.25 7C3.69772 7 3.25 7.44772 3.25 8C3.25 8.55229 3.69772 9 4.25 9H11.75C12.3023 9 12.75 8.55229 12.75 8C12.75 7.44772 12.3023 7 11.75 7H4.25Z"
                fill={color}
            ></path>
        </svg>
    );
};
export default ProgressIcon;
