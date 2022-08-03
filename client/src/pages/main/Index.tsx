import './main.css';
import '../shared/styles/textinput.css';
import { useState, useEffect } from 'react';

export default function MainPage() {
	const onChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
	};

	return (
		<div className="main-container">
			<div className="search-container">
				<input id="email" type="text" className="text-input" placeholder="Search todos" onChange={onChange}></input>
			</div>
		</div>
	);
}
