import './main.css';
import '../shared/styles/textinput.css';
import { useState, useEffect } from 'react';

import CircleButton from '../shared/CircleButton';
import Category from './Category';
import CurrentTask from './CurrentTask';

export default function MainPage() {
	const onChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
	};

	return (
		<div className="main-container">
			<div className="search-container">
				<input id="email" type="text" className="text-input" placeholder="Search todos" onChange={onChange}></input>
				<CircleButton symbol="" />
			</div>

			<h3 className="subtitle">Categories</h3>

			<div className="categories-container">
				<Category />
				<Category />
				<Category />
				<Category />
			</div>

			<h3 className="subtitle">Current tasks</h3>

			<div className="task-container">
				<CurrentTask />
			</div>
		</div>
	);
}
