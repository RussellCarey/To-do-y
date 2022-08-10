import React, { FunctionComponent, useState } from 'react';
import LongButton from '../shared/LongButton';
import './styles/modals.css';

import * as Validations from './utils/validations';
import { submitNewCategory } from './services/dbServices';

interface AddCategoryProps {
	setShow: any;
}

interface NewCategory {
	name: string;
	color: string;
}

const AddCategory: FunctionComponent<AddCategoryProps> = ({ setShow }) => {
	const [categoryData, setCategoryData] = useState<NewCategory>({ name: '', color: '' });

	const addCategory = async () => {
		// Validations
		Validations.validatePresence(categoryData.name);
		Validations.validatePresence(categoryData.color);
		Validations.validateLength(categoryData.name, 3, 15);
		Validations.validateLength(categoryData.name, 4, 6);

		const req = await submitNewCategory(categoryData);
		console.log(req);
	};

	const inputOnChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;
		setCategoryData({ ...categoryData, [target.id]: target.value });
	};

	const selectOnChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;
		setCategoryData({ ...categoryData, color: target.value });
	};

	return (
		<>
			<div className="modal-container">
				<div className="area-container">
					<h2 className="cross" onClick={() => setShow(false)}>
						X
					</h2>
					<h3 className="title">Add new category</h3>
					<input id="name" className="add-inputs" type="text" placeholder="Enter title" onChange={inputOnChange} />
					<select id="color" className="add-inputs" name="" onChange={selectOnChange}>
						<option value="#0000">black</option>
						<option value="#0000">black</option>
					</select>
					<LongButton text={'Submit category'} color={'orange'} clickFunction={addCategory} />
				</div>
			</div>
		</>
	);
};

export default AddCategory;
