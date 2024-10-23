export const TodoList = ({todos, markTodoAsCompleted, removeTodoItem}) => {
  
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            onClick={() => todo.completed ? removeTodoItem(todo.id) : markTodoAsCompleted(todo.id)}
            key={todo.id}
            style={{textDecoration: todo.completed ? 'line-through' : ''}}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
