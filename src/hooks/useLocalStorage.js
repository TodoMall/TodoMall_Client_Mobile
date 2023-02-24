import { useEffect, useState } from "react";

import { isNull } from "../utils";

const useLocalStorage = (key, initialState = null) => {
    console.log("key : ", key);
    console.log("initialState : ", initialState);
    console.log("localStorage.getItem(key) : ", localStorage.getItem(key));
    const value = !isNull(localStorage.getItem(key)) || initialState;
    const [state, setState] = useState(value);

    useEffect(() => {
        localStorage.setItem(key, state);
    }, [key, state]);

    console.log("formatted state :", state);
    localStorage.clear();
    return [state, setState];
};

export default useLocalStorage;
