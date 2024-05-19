import {useCallback, useEffect, useRef, useState} from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import {fetchUserPlaces, updateUserPlaces} from "./http.js";
import Error from "./components/Error.jsx";

function App() {
  const selectedPlace = useRef();
  
  const [isFetching, setIsFetching] = useState(false);
  const [errors, setErrors] = useState({});
  
  const [userPlaces, setUserPlaces] = useState([]);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  
  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
      } catch (e) {
        setErrors({message: e.message || 'Could not fetch user places, please try again later.'});
      }
      setIsFetching(false);
    })();
  }, []);
  
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }
  
  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }
  
  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({message: error?.message || 'Faild to update places.'});
    }
  }
  
  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    // TODO: How to do this shorter
    const removePlace = places => places.filter((place) => place.id !== selectedPlace.current.id);
    
    // setUserPlaces((prevPickedPlaces) =>
    //   prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id);
    
    // setUserPlaces((prevPickedPlaces) => removePlace(prevPickedPlaces));
    setUserPlaces(removePlace);
    try {
      // await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id));
      await updateUserPlaces(removePlace(userPlaces));
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({message: error?.message || 'Faild to delete places.'});
    }
    setModalIsOpen(false);
  }, [userPlaces]);
  
  function handleError() {
    setErrorUpdatingPlaces(null);
  }
  
  return (
    <>
      {errorUpdatingPlaces && <Modal
        open={errorUpdatingPlaces}
        onClose={handleError}
      >
        <Error title="An error occurred!!!" message={errorUpdatingPlaces?.message} onConfirm={handleError}/>
      </Modal>}
        <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
          <DeleteConfirmation
            onCancel={handleStopRemovePlace}
            onConfirm={handleRemovePlace}
          />
        </Modal>
        
        <header>
          <img src={logoImg} alt="Stylized globe"/>
          <h1>PlacePicker</h1>
          <p>
            Create your personal collection of places you would like to visit or
            you have visited.
          </p>
        </header>
        <main>
          {errors.message && <Error title="An error occurred!!!" message={errors.message}/>}
          {!errors.message && <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            isLoading={isFetching}
            loadingText="Loading..."
            onSelectPlace={handleStartRemovePlace}
          />}
          
          <AvailablePlaces onSelectPlace={handleSelectPlace}/>
        </main>
    </>
  );
}

export default App;
