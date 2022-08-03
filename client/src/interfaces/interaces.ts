export interface Todo {
	category_id: number;
	content: string;
	created_at: string;
	deadline: string;
	id: number;
	title: string;
	updated_at: string;
}

export interface Category {
	color: string;
	created_at: string;
	id: number;
	name: string;
	updated_at: string;
	user_id: number;
}
