import { useState } from "react";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((state) => !state);

  return [state, setState, toggle];
};

export default useToggle;
