import { useState } from "react";

const usePopup = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const handleOpen = () => setState(true);
    const handleClose = () => setState(false);

    return [state, handleOpen, handleClose];
};

export default usePopup;
