import './styles/main.css';
import '../shared/styles/textinput.css';
import { FunctionComponent, useEffect, useState } from 'react';

import CircleButton from '../shared/CircleButton';
import CategoryComponent from './Category';
import CurrentTask from './CurrentTask';

import { getAllTodos, getAllCategories } from './services/dbServices';
import { MainPageProps } from './interfaces/interfaces';

import AddEditTask from '../modals/AddTask';

const MainPage: FunctionComponent<MainPageProps> = ({ todos, setTodos, categories, setCategory }) => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [showEditTask, setShowEditTask] = useState(false);

	const onChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
	};

	const getAllTasksAndCategories = async () => {
		const [todos, categories] = await Promise.all([await getAllTodos(), await getAllCategories()]);
		//! CHECKKSKKSKS - seperat ethe calls..
		console.log(categories);
		console.log(todos);
		setCategory(categories.data);
		setTodos(todos.data);
	};

	useEffect(() => {
		getAllTasksAndCategories();
	}, []);

	return (
		<>
			{showAddTask && <AddEditTask isAdd={true} show={showAddTask} setShow={setShowAddTask} />}
			{!showAddTask && <AddEditTask isAdd={false} show={showEditTask} setShow={setShowEditTask} />}

			<div className="main-container">
				<div className="search-container">
					<input id="email" type="text" className="text-input" placeholder="Not used for this project" onChange={onChange}></input>
					<CircleButton symbol="" />
				</div>

				<div className="title-container">
					<h3 className="subtitle">Categories</h3>
					<h2 className="plus">+</h2>
				</div>

				<div className="categories-container">
					{categories &&
						categories.map((cat) => {
							return <CategoryComponent id={cat.id} title={cat.name} tasksNo={1} />;
						})}
				</div>

				<div className="title-container">
					<h3 className="subtitle">Current tasks</h3>
					<h2 className="plus">+</h2>
				</div>

				<div className="task-container">
					{todos &&
						todos.map((td) => {
							return <CurrentTask id={td.id} title={td.title} text={td.content} />;
						})}
				</div>
			</div>
		</>
	);
};

export default MainPage;
