import {useState} from "react";

export default function UserInput() {
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
        [inputIdentifier]: newValue
      }
    })
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(e) =>
                handleChange('initialInvestment', e.target.value)}/>
          </label>
        </p>
        <p>
          <label>Annual Investment
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(e) =>
                handleChange('annualInvestment', e.target.value)}/>
          </label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(e) =>
                handleChange('expectedReturn', e.target.value)}/>
          </label>
        </p>
        <p>
          <label>Duration
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(e) =>
                handleChange('duration', e.target.value)}/>
          </label>
        </p>
      </div>

    </section>
  );
}