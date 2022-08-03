import './index.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from './pages/shared/Container';
import LoginPage from './pages/login/Index';
import MainPage from './pages/main/Index';

interface PageState {
	page: 'login' | 'main' | 'todo';
}

function App() {
	const [user, setUser] = useState(null);
	const [todos, setTodos] = useState(null);
	const [currentPage, setCurrentPage] = useState<PageState>({ page: 'login' });

	useEffect(() => {
		// Check user is logged in and move to next page if so..
	}, []);

	console.log(currentPage);

	return (
		<BrowserRouter>
			<Container>
				{currentPage.page === 'login' && <LoginPage setCurrentPage={setCurrentPage} />}
				{currentPage.page === 'main' && <MainPage />}
			</Container>
		</BrowserRouter>
	);
}

export default App;
