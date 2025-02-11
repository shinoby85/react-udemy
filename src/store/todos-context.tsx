import {createContext, FC, ReactNode, useState} from "react";
import Todo from "../models/todo.ts";

type TodosContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
}
export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {
  },
  removeTodo: () => {
  }
});

const TodosContextProvider: FC<{ children?: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(todoText: string): void {
    setTodos(lastTodos => {
      return [
        ...lastTodos,
        new Todo(todoText)
      ]
    });
  }

  function removeTodoHandler(id: string): void {
    setTodos(lastTodos => {
      return lastTodos.filter(todo => todo.id !== id);
    })
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }
  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>
}

export default TodosContextProvider;