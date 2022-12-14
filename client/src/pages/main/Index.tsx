import './styles/main.css';
import '../shared/styles/textinput.css';
import { FunctionComponent, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CircleButton from '../shared/CircleButton';
import CategoryComponent from './Category';
import CurrentTask from './CurrentTask';

import { getAllTodos, getAllCategories } from './services/dbServices';
import { Todo } from '../../interfaces/interaces';
import { MainPageProps } from './interfaces/interfaces';

import AddEditTask from '../modals/AddTask';
import AddCategory from '../modals/AddCategory';

const MainPage: FunctionComponent<MainPageProps> = ({ todos, setTodos, categories, setCategory }) => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [showEditTask, setShowEditTask] = useState(false);
	const [showAddCategory, setShowAddCategory] = useState(false);
	const [showFullTodo, setShowFullTodo] = useState(false);
	const [selectedTodo, setSelectedTodo] = useState<Todo>();

	const onChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
	};

	const getAllTasksAndCategories = async () => {
		const [todos, categories] = await Promise.all([await getAllTodos(), await getAllCategories()]);
		//! CHECKKSKKSKS - seperat ethe calls..
		setCategory(categories.data);
		setTodos(todos.data);
	};

	const editOnClick = () => {};

	useEffect(() => {
		getAllTasksAndCategories();
	}, []);

	return (
		<>
			<ToastContainer />
			{showAddTask && <AddEditTask isAdd={true} show={showAddTask} setShow={setShowAddTask} categories={categories} />}
			{showEditTask && (
				<AddEditTask isAdd={false} show={showEditTask} setShow={setShowEditTask} categories={categories} selectedTodo={selectedTodo} />
			)}
			{showAddCategory && <AddCategory setShow={setShowAddCategory} />}
			{showFullTodo}

			<div className="main-container">
				<div className="search-container">
					<input id="email" type="text" className="text-input" placeholder="Not used for this project" onChange={onChange}></input>
					<CircleButton symbol="" />
				</div>

				<div className="title-container">
					<h3 className="subtitle">Categories</h3>
					<h2 className="plus" onClick={() => setShowAddCategory(true)}>
						+
					</h2>
				</div>

				<div className="categories-container">
					{categories.length > 0 &&
						categories.map((cat) => {
							return <CategoryComponent id={cat.id} title={cat.name} tasksNo={1} showToast={toast} />;
						})}
				</div>

				<div className="title-container">
					<h3 className="subtitle">Current tasks</h3>
					<h2 className="plus" onClick={() => setShowAddTask(true)}>
						+
					</h2>
				</div>

				<div className="task-container">
					{todos.length > 0 &&
						todos.map((td) => {
							return (
								<CurrentTask
									todo={td}
									setSelectedTodo={setSelectedTodo}
									setShowEditTask={setShowEditTask}
									setShowFullTodo={setShowFullTodo}
									showToast={toast}
								/>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default MainPage;
