import { useState } from "react";

export const TodoForm = ({ addTodoItem }) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    addTodoItem(text);
    setText('');
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
