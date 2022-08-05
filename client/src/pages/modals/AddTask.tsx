import React, { FunctionComponent, useEffect, useState } from 'react';
import LongButton from '../shared/LongButton';
import './styles/modals.css';

import * as Validations from './utils/validations';
import { submitNewTodo, editTodo } from './services/dbServices';
import { AddEditTaskProps, NewTodo } from './interfaces/interfaces';

const AddTask: FunctionComponent<AddEditTaskProps> = ({ isAdd, categories, setShow, selectedTodo }) => {
	const [todoDetails, setToDoDetails] = useState<NewTodo>({ title: '', content: '', deadline: '', category_id: '' });

	useEffect(() => {
		if (isAdd) return;
		setToDoDetails(selectedTodo!);
	}, []);

	const addNewTodo = async () => {
		const req = await submitNewTodo(todoDetails);
		console.log(req);
	};

	const editToDo = async () => {
		const req = await editTodo(selectedTodo!.id, todoDetails);
		console.log(req);
	};

	const inputOnChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;
		setToDoDetails({ ...todoDetails, [target.id]: target.value });
	};

	const selectOnChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;
		setToDoDetails({ ...todoDetails, category_id: target.selectedIndex });
	};

	return (
		<div className="modal-container">
			<div className="area-container">
				<h2 className="cross" onClick={() => setShow(false)}>
					X
				</h2>

				<h3 className="title">{isAdd ? 'Add Todo' : 'Edit Todo'}</h3>
				<input id="title" className="add-inputs" type="text" placeholder="Name" onChange={inputOnChange} value={todoDetails.title} />
				<textarea id="content" className="add-inputs" placeholder="Content" onChange={inputOnChange} value={todoDetails.content} />
				<input id="deadline" className="add-inputs" type="date" placeholder="deadline" onChange={inputOnChange} value={todoDetails.deadline} />
				<select id="category" placeholder="category" className="add-inputs" onChange={selectOnChange} value={todoDetails.deadline}>
					<option id={''} value={''}>
						Select category
					</option>
					{categories.length > 0 &&
						categories.map((cat) => {
							return (
								<option id={cat.id.toString()} value={cat.name}>
									{cat.name}
								</option>
							);
						})}
				</select>

				<LongButton text={'Submit todo'} color={'orange'} clickFunction={isAdd ? addNewTodo : editToDo} />
			</div>
		</div>
	);
};

export default AddTask;
