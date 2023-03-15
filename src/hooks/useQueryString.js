import { useLocation } from "react-router-dom";

/*
FIXME : 확장성 고려
import { useLocation } from "react-router-dom";

const useQueryString = input => {
    const result = [];
    const { search } = useLocation();
    const queryString = new URLSearchParams(search);
    if (Array.isArray(input)) {
        input.forEach(el => {
            result.push(queryString.get(el));
        });
    }

    if (!Array.isArray(input)) {
        result.push(queryString.get(input));
    }

    return result;
};

*/

const useQueryString = target => {
    const { search } = useLocation();

    const queryString = new URLSearchParams(search);
    const query = queryString.get(target);

    return query;
};

export default useQueryString;
