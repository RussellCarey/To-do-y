import { Category, Todo } from '../../../interfaces/interaces';

export interface NewTodo {
	title: string;
	content: string;
	deadline: string;
	category_id: string | number;
}

export interface AddEditTaskProps {
	id?: number | string;
	isAdd: boolean;
	show: boolean;
	setShow: any;
	categories: Category[];
	selectedTodo?: Todo;
}
