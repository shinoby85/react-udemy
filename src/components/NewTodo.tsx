import {FC, FormEvent, useContext, useRef} from "react";
import classes from "./NewTodo.module.css";
import {TodosContext} from "../store/todos-context.tsx";

const NewTodo: FC = () => {
  const {addTodo} = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    addTodo(enteredText);
    todoTextInputRef.current!.value = '';
  }
  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">Todo text</label>
    <input ref={todoTextInputRef} type="text" id="text"/>
    <button>Add Todo</button>
  </form>
}
export default NewTodo;