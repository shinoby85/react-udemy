import Places from './Places.jsx';
import {useEffect, useState} from "react";
import Error from "./Error.jsx";
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from "../http.js";

export default function AvailablePlaces({onSelectPlace}) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition(position => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(places);
          setIsFetching(false);
        })
      } catch (e) {
        setErrors({message: e.message || 'Could not fetch places, please try again later.'});
      }
    })();
  }, []);
  if (errors.message) {
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
