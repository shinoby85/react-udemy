import {FC, FormEvent, useRef} from "react";
import classes from "./NewTodo.module.css";

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = ({onAddTodo}) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    onAddTodo(enteredText);
    todoTextInputRef.current!.value = '';
  }
  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">Todo text</label>
    <input ref={todoTextInputRef} type="text" id="text"/>
    <button>Add Todo</button>
  </form>
}
export default NewTodo;