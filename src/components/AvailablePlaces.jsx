import Places from './Places.jsx';
import {useEffect, useState} from "react";
import Error from "./Error.jsx";

export default function AvailablePlaces({onSelectPlace}) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const response = await fetch(`http://localhost:3000/places`);
        const resData = await response.json();
        if (!response.ok) {
          throw new Error(`Failed to fetch places.`);
        }
        setAvailablePlaces(resData.places);
      } catch (e) {
        setErrors({message: e.message || 'Could not fetch places, please try again later.'});
      }
      setIsFetching(false);
    })();
  }, []);
  if (errors) {
    return <Error
      title="An error occurred!!!"
      message={errors.message}
    />
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
