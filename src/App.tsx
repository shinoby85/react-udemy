import Todos from "./components/Todos.tsx";
import Todo from "./models/todo.ts";
import NewTodo from "./components/NewTodo.tsx";
import {useState} from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ]);

  function addTodoHandler(todoText: string): void {
    setTodos(lastTodos=>{
      return [
        ...lastTodos,
        new Todo(todoText)
      ]
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  )
}

export default App
