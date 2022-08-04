import { FunctionComponent, useEffect, useState } from 'react';
import LongButton from '../shared/LongButton';
import './styles/modals.css';

import { AddTaskProps, NewTodo } from './interfaces/interfaces';

const AddTask: FunctionComponent<AddTaskProps> = ({ isAdd }) => {
	const [todoDetails, setToDoDetails] = useState<NewTodo>();

	useEffect(() => {
		if (isAdd) return;
	}, []);

	const addNewTodo = () => {
		//
	};

	return (
		<div className="modal-container">
			<div className="area-container">
				<h2 className="cross">X</h2>
				<h3 className="title">{isAdd ? 'Add Todo' : 'Edit Todo'}</h3>
				<input className="add-inputs" type="text" placeholder="Name" />
				<textarea className="add-inputs" placeholder="Content" />
				<input className="add-inputs" type="date" placeholder="deadline" />
				<LongButton text={'Submit todo'} color={'orange'} />
			</div>
		</div>
	);
};

export default AddTask;
