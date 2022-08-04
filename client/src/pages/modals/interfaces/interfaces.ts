export interface NewTodo {
	title: string;
	content: string;
	deadline: string;
	category_id: string | number;
}

export interface AddTaskProps {
	id?: number | string;
	isAdd: boolean;
	show: boolean;
	setShow: any;
}
