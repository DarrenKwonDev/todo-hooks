import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

const TodoInsertWrapper = styled.form`
	display: flex;
	background: #495057;
	input {
		background: none;
		outline: none;
		border: none;
		padding: 0.5rem;
		font-size: 1.125rem;
		line-height: 1.5;
		color: white;
		&::placeholder {
			color: #dee2e6;
		}
		flex: 1;
	}
	button {
		background: none;
		outline: none;
		border: none;
		background: #868e96;
		color: white;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		cursor: pointer;
		transition: 0.1s background ease-in;
		&:hover {
			background: #adb5bd;
		}
	}
`;

function TodoInsert({ onInsert }) {
	const [value, setvalue] = useState('');

	const onChange = useCallback((e) => {
		setvalue(e.target.value);
	}, []);

	const onSubmit = useCallback(
		(e) => {
			e.preventDefault();
			onInsert(value);
			setvalue('');
		},
		[onInsert, value]
	);

	return (
		<TodoInsertWrapper className="TodoInsert" onSubmit={onSubmit}>
			<input placeholder="할 일을 입력하세요" value={value} onChange={onChange}></input>
			<button type="submit">
				<FiPlus />
			</button>
		</TodoInsertWrapper>
	);
}

export default TodoInsert;