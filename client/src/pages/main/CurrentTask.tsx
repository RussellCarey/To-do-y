import React, { FunctionComponent } from 'react';
import { deleteTodo } from './services/dbServices';

interface CurrenTaskProps {
	id: string | number;
	title: string;
	text: string;
	onClick?: Function;
}

const CurrentTask: FunctionComponent<CurrenTaskProps> = ({ id, title, text, onClick }) => {
	const removeTodo = async () => {
		const delRequest = await deleteTodo(id);
		console.log(delRequest);
	};
	return (
		<div className="currenttask-container">
			<h3 className="cross" onClick={removeTodo}>
				x
			</h3>
			<p>{title}</p>
			<p>{text}</p>
		</div>
	);
};

export default CurrentTask;
