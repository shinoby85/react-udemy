import Places from './Places.jsx';
import Error from "./Error.jsx";
import {fetchAvailablePlaces} from "../http.js";
import {useFetch} from "../hooks/useFetch.js";
import {sortPlacesByDistance} from "../loc.js";

async function fetchSortPlaces() {
  const places = await fetchAvailablePlaces();
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude);
      
      resolve(sortedPlaces);
      
    })
  })
}

export default function AvailablePlaces({onSelectPlace}) {
  
  const {
    isFetching,
    fetchedData: availablePlaces,
    errors
  } = useFetch(fetchSortPlaces, []);
  
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
