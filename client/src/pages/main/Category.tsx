import React, { FunctionComponent } from 'react';
import { deleteCategory } from './services/dbServices';

interface CategoryProps {
	id: string | number;
	title: string;
	tasksNo: number;
	onClick?: Function;
	showToast: Function;
}

const Category: FunctionComponent<CategoryProps> = ({ id, title, tasksNo, showToast }) => {
	const removeCategory = async () => {
		try {
			const delRequest = await deleteCategory(id);
			if (delRequest.status !== 200) return showToast('Error removing category..');
			showToast('Removed category..');
		} catch (error) {
			showToast('Error removing category..');
		}
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
