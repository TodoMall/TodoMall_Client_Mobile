import { useLocation } from "react-router-dom";

const useQueryString = (...args) => {
    const result = [];
    const { search } = useLocation();
    const queryString = new URLSearchParams(search);
    if (Array.isArray(args)) {
        args.forEach(el => {
            result.push(queryString.get(el));
        });
    }

    if (!Array.isArray(args)) {
        result.push(queryString.get(args));
    }
    return result;
};

export default useQueryString;
