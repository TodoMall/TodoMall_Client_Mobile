import { useEffect, useState } from "react";

const useDebounce = (initialValue, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(initialValue), delay);

        return () => {
            clearTimeout(timer);
        };
    }, [initialValue, delay]);

    return debouncedValue;
};

export default useDebounce;
