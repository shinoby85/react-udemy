import {FC, ReactNode} from "react";
import Todo from "../models/todo.ts";
import TodoItem from "./TodoItem.tsx";
import classes from "./Todos.module.css"

const Todos: FC<{
  children?: ReactNode; items: Todo[], onRemoveTodo: (id: string) => void
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <TodoItem onRemoveItem={() => props.onRemoveTodo(item.id)} key={item.id} text={item.text}/>))}
    </ul>
  )
}

export default Todos;