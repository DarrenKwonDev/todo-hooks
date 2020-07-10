import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const initialTodos = [
  { id: 1, text: '리액트 기초 알아보기', checked: true },
  { id: 2, text: '스타일 컴포넌트 공부하기', checked: true },
  { id: 3, text: '일정 관리 앱 만들기', checked: false },
];

function createBulkTodos() {
  const array = [];
  for (let i = 0; i <= 2500; i++) {
    array.push({ id: i, text: `할일 ${i}`, checked: false });
  }

  return array;
}

function App() {
  const [todos, settodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    settodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    settodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    settodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todo={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
