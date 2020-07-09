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

function App() {
	const [todos, settodos] = useState(initialTodos);

	const nextId = useRef(4);

	const onInsert = useCallback(
		(text) => {
			const todo = {
				id: nextId.current,
				text,
				checked: false,
			};
			settodos(todos.concat(todo));
			nextId.current += 1;
		},
		[todos]
	);

	const onRemove = useCallback(
		(id) => {
			settodos(todos.filter((todo) => todo.id !== id));
		},
		[todos]
	);

	const onToggle = useCallback(
		(id) => {
			settodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
		},
		[todos]
	);

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todo={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
}

export default App;
