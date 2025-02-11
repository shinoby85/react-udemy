import {FC, ReactNode} from "react";
import Todo from "../models/todo.ts";
import TodoItem from "./TodoItem.tsx";

const Todos: FC<{
  children?: ReactNode; items: Todo[]
}> = (props) => {
  return (
    <ul>
      {props.items.map(item => (<TodoItem key={item.id} text={item.text} />))}
    </ul>
  )
}

export default Todos;