import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, options = {}, method = "GET") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios({
        url,
        method,
        ...options,
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useAxios;
/*
The fetchData function is declared inside the useEffect hook because it needs to be executed when the component is rendered, and the useEffect hook is used to specify the side effects that should be run when the component is rendered.

The useEffect hook takes a function as an argument, which is called the "effect function". The effect function can contain any code that needs to be run when the component is rendered, such as sending an HTTP request or subscribing to a data stream.

By declaring the fetchData function inside the useEffect hook, it will be executed every time the component is rendered. This is useful when the component needs to send a request to an API to fetch data or perform some other side effect.

The useEffect hook also takes a second argument, which is an array of values that the effect function depends on. When any of the values in the array change, the effect function will be re-executed. This is useful for re-running the effect function when the component's props or state change.

In the example you provided, the useEffect hook is called with an empty array as the second argument, which means that the effect function will only be executed once when the component is mounted.

I hope this helps! Let me know if you have any questions.
*/
