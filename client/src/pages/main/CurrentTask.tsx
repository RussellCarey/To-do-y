import React, { FunctionComponent } from 'react';
import { CurrenTaskProps } from './interfaces/interfaces';
import { deleteTodo } from './services/dbServices';

const CurrentTask: FunctionComponent<CurrenTaskProps> = ({ todo, setSelectedTodo, setShowEditTask, setShowFullTodo, showToast }) => {
	const removeTodo = async () => {
		try {
			const delRequest = await deleteTodo(todo.id);
			if (delRequest.status !== 200) return showToast('Error removing todo');
			showToast('Removed todo');
		} catch (error) {
			showToast('Error removing todo..');
		}
	};

	const editToDo = () => {
		setSelectedTodo(todo);
		setShowEditTask(true);
	};

	return (
		<div className="currenttask-container" onClick={() => setShowFullTodo(true)}>
			<div className="current-task-header">
				<p onClick={editToDo}>edit</p>
				<h3 className="cross-static" onClick={removeTodo}>
					x
				</h3>
			</div>

			<p className="currenttask-title">{todo.title}</p>
			<p>{todo.content}</p>
		</div>
	);
};

export default CurrentTask;
