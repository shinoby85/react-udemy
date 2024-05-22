import {useEffect, useState} from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [errors, setErrors] = useState({});
  const [fetchedData, setFetchedData] = useState(initialValue);
  
  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (e) {
        setErrors({message: e.message || 'Failed to fetch data.'});
      }
      setIsFetching(false);
    })();
  }, [fetchFn]);
  return {isFetching, fetchedData, errors, setFetchedData};
}