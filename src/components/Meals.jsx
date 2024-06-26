import {useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  
  useEffect(() => {
    (async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
      }
      const meals = await response.json();
      setLoadedMeals(meals);
    })();
  }, []);
  
  
  return <ul id="meals">
    {loadedMeals.length
      ? loadedMeals.map(meal => (<MealItem key={meal.id} meal={meal}/>))
      : <li>Loading...</li>
    }
  </ul>;
}