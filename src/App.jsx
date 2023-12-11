import Header from "./components/Header.jsx";
import './index.css'
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }
  return (
    <main>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      <Result userInput={userInput} />
    </main>

  )
}

export default App
