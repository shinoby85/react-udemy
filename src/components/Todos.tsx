import {FC, ReactNode} from "react";

const Todos: FC<{
  children?: ReactNode; items: string[]
}> = (props) => {
  return (
    <ul>
      {props.items.map(item => (<li key={item}>{item}</li>))}
    </ul>
  )
}

export default Todos;