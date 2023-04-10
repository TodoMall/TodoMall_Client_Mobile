import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            const result = item ? JSON.parse(item) : initialValue;
            return result;
        } catch (error) {
            console.log("target key : ", key);
            console.error("error : ", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            const valueToStore =
                storedValue instanceof Function ? storedValue() : storedValue;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    }, [key, storedValue]);
    return [storedValue, setStoredValue];
};

export default useLocalStorage;
