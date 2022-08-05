import { Todo, Category } from '../../../interfaces/interaces';

export interface MainPageProps {
	todos: Todo[];
	setTodos: any;
	categories: Category[];
	setCategory: any;
}

export interface CurrenTaskProps {
	todo: Todo;
	onClick?: Function;
	setSelectedTodo?: any;
	setShowEditTask?: any;
}
