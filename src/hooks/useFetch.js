import axios from 'axios';
import { useState, useEffect, useDebugValue } from 'react';

const useFetch = url => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControl = new AbortController();

    const fetchItems = async () => {
      try {
        const result = await axios.get(url, {
          signal: abortControl.signal
        });

        if (result.status !== 200) {
          throw new Error('Cannot fetch data');
        }

        setItems(result.data);
        setIsLoading(false);
        setError(null);

      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsLoading(false);
          setError(error.message);
        }
      }
    };

    fetchItems();

    return () => abortControl.abort();
  }, [url, error]);

  useDebugValue(items, isLoading, error);

  return { items, isLoading, error };
};

export default useFetch;
