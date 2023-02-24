import { COLOR } from "../../constants";

const SuccessIcon = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="df11c79c5ebbf28a6ed84c718953cf1a"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.5821 6.70711C12.9726 6.31658 12.9726 5.68342 12.5821 5.29289C12.1916 4.90237 11.5584 4.90237 11.1679 5.29289L7 9.46079L4.70711 7.16789C4.31658 6.77737 3.68342 6.77737 3.29289 7.16789C2.90237 7.55842 2.90237 8.19158 3.29289 8.58211L6.29289 11.5821C6.68342 11.9726 7.31658 11.9726 7.70711 11.5821L12.5821 6.70711Z"
                fill={COLOR.SUCCESS}
            ></path>
        </svg>
    );
};
export default SuccessIcon;
