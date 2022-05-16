import axios from 'axios';
import { useRef, useReducer, useEffect } from 'react';

const useAxios = url => {
  const cache = useRef({});

  const initialState = {
    isLoading: false,
    data: [],
    error: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'start':
        return {
          ...initialState,
          isLoading: true,
        };

      case 'success':
        return {
          ...initialState,
          data: action.data,
        };

      case 'fail':
        return {
          ...initialState,
          error: action.error,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    if (!url || !url.trim()) return;

    const fetchData = async () => {
      dispatch({ type: 'start' });

      if (cache.current[url]) {
        const result = cache.current[url];

        dispatch({
          type: 'success',
          data: result.data,
        });
      } else {
        try {
          const result = await axios.get(url, { signal: controller.signal });

          cache.current[url] = result.data;

          dispatch({
            type: 'success',
            data: result.data,
          });
        } catch (error) {
          dispatch({ type: 'fail', error: error.message });
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return state;
};

export default useAxios;
