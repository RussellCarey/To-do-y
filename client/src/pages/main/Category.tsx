import React, { FunctionComponent } from 'react';
import { deleteCategory } from './services/dbServices';

interface CategoryProps {
	id: string | number;
	title: string;
	tasksNo: number;
	onClick?: Function;
}

const Category: FunctionComponent<CategoryProps> = ({ id, title, tasksNo, onClick }) => {
	const removeCategory = async () => {
		const delRequest = await deleteCategory(id);
		console.log(delRequest);
	};

	return (
		<div className="category">
			<h3 className="cross" onClick={removeCategory}>
				x
			</h3>
			{title}
			<p className="category-taskno">{`${tasksNo} tasks`}</p>
		</div>
	);
};

export default Category;
