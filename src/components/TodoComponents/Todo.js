import React from 'react';

const Todo = props => {
	return (
		<div
			className={`todo${props.todoItem.completed ? ' completed' : ''}`}
			onClick={() => props.toggleTodo(props.todoItem.id)}
		>
			<p>{props.todoItem.name}</p>
		</div>
	);
};

export default Todo;
