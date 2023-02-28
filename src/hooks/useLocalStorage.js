import { useEffect, useState } from "react";

import { isNull } from "../utils";

const useLocalStorage = (key, initialState) => {
    const value = isNull(localStorage.getItem(key))
        ? localStorage.getItem(key)
        : initialState;
    const [state, setState] = useState(value);

    useEffect(() => {
        localStorage.setItem(key, state);
    }, [key, state]);

    return [state, setState];
};

export default useLocalStorage;
