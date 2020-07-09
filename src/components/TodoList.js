import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
	min-height: 320px;
	max-height: 513px;

	overflow-y: auto;
`;

function TodoList({ todo, onRemove, onToggle }) {
	return (
		<TodoListWrapper>
			{todo.map((todo) => (
				<TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
			))}
		</TodoListWrapper>
	);
}

export default TodoList;
