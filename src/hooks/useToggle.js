import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  //   const toggle = useCallback(() => setState((state) => !state), []);
  const toggle = () => setState((state) => !state);

  return [state, setState, toggle];
};

export default useToggle;
