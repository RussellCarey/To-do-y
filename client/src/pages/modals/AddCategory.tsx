import React, { FunctionComponent, useEffect, useState } from 'react';
import LongButton from '../shared/LongButton';
import './styles/modals.css';

import * as Validations from './utils/validations';
import { submitNewCategory } from './services/dbServices';

interface AddCategoryProps {
	setShow: any;
}

const AddCategory: FunctionComponent<AddCategoryProps> = ({ setShow }) => {
	const [categoryData, setCategoryData] = useState({});

	const addCategory = async () => {
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
			<h2 className="cross" onClick={() => setShow(false)}>
				X
			</h2>
			<div className="modal-container">
				<div className="area-container">
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
