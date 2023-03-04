import { useLocation } from "react-router-dom";

const useQueryString = target => {
    const { search } = useLocation();

    const queryString = new URLSearchParams(search);
    const query = queryString.get(target);

    return query;
};

export default useQueryString;
