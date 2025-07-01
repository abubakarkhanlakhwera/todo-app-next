'use client';

export default function TodoItems({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex items-center justify-between p-2 border rounded">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`flex-1 cursor-pointer ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 px-2 font-bold"
      >
        ✕
      </button>
    </div>
  );
}
