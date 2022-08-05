import React, { FunctionComponent } from 'react';
import { CurrenTaskProps } from './interfaces/interfaces';
import { deleteTodo } from './services/dbServices';

const CurrentTask: FunctionComponent<CurrenTaskProps> = ({ todo, onClick, setSelectedTodo, setShowEditTask }) => {
	const removeTodo = async () => {
		const delRequest = await deleteTodo(todo.id);
		console.log(delRequest);
	};

	const editToDo = () => {
		setSelectedTodo(todo);
		setShowEditTask(true);
	};

	return (
		<div className="currenttask-container">
			<h3 className="cross" onClick={removeTodo}>
				x
			</h3>
			<p onClick={editToDo}>edit</p>
			<p>{todo.title}</p>
			<p>{todo.content}</p>
		</div>
	);
};

export default CurrentTask;
