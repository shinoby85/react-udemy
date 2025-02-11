import {FC, useContext} from "react";
import TodoItem from "./TodoItem.tsx";
import classes from "./Todos.module.css"
import {TodosContext} from "../store/todos-context.tsx";

const Todos: FC = () => {
  const {items, removeTodo} = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {items.map(item => (
        <TodoItem onRemoveItem={() => removeTodo(item.id)} key={item.id} text={item.text}/>))}
    </ul>
  )
}

export default Todos;