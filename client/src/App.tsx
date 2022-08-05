import './index.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from './pages/shared/Container';
import LoginPage from './pages/login/Index';
import MainPage from './pages/main/Index';

import { Todo, Category } from './interfaces/interaces';

interface PageState {
	page: 'login' | 'main' | 'todo';
}

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [currentPage, setCurrentPage] = useState<PageState>({ page: 'login' });

	useEffect(() => {
		// Check user is logged in and move to next page if so..
	}, []);

	return (
		<BrowserRouter>
			<Container>
				{currentPage.page === 'login' && <LoginPage setCurrentPage={setCurrentPage} />}
				{currentPage.page === 'main' && <MainPage todos={todos} setTodos={setTodos} categories={categories} setCategory={setCategories} />}
			</Container>
		</BrowserRouter>
	);
}

export default App;
