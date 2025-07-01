'use client';

import { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItems';

export default function Home() {
  const [todos, setTodos] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) =>
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));

  const deleteTodo = (id) =>
    setTodos(todos.filter(todo => todo.id !== id));

  return (
    <main className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">📝 ToDo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="mt-4 space-y-2">
        {todos.length === 0 ? (
          <p className="text-gray-500">No tasks yet — add one!</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </div>
    </main>
  );
}
