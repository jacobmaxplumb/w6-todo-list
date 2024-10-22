import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodoItem = () => {
    setTodos([...todos, { id: Date.now(), text: text, completed: false }]);
    setText("");
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
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodoItem}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li
            onClick={() => {
              removeTodoItem(todo.id);
            }}
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
