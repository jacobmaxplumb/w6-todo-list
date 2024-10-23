import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoItem = (text) => {
    setTodos([...todos, { id: Date.now(), text: text, completed: false }]);
  };

  const removeTodoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markTodoAsCompleted = (id) => {
    const todoItems = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: true };
      else return { ...todo };
    });
    setTodos(todoItems);
  };

  return (
    <div>
      <TodoForm addTodoItem={addTodoItem} />
      <TodoList
        todos={todos}
        removeTodoItem={removeTodoItem}
        markTodoAsCompleted={markTodoAsCompleted}
      />
    </div>
  );
};

export default App;
