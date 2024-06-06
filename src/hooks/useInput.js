import {useState} from "react";

export function useInput(defaultValue, validatinFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  
  const [didEdit, setDidEdit] = useState(false);
  const isInvalid = didEdit && validatinFn(enteredValue);
  
  function handleInputBlur() {
    setDidEdit(true);
  }
  
  function handleInputChange(event) {
    setEnteredValue(event.target.value)
    setDidEdit(false);
  }
  
  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    error: isInvalid
  };
}