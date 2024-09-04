import TodoItem from './todo-item';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <>
    <div className='mb-4 flex items-center justify-between'>
    <ul className='text-white'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </ul>
    </div>
    </>
  );
}

export default TodoList;
