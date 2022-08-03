import React, { FunctionComponent, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './styles/login.css';
import '../shared/styles/textinput.css';

// Components
import { constants } from '../../constants/urls';
import LongButton from '../shared/LongButton';

// Interfaces
import { LoginDetails, LoginPageProps } from './interfaces/interface';

// Methods
import { loginUserAttempt } from './services/dbServices';

const LoginPage: FunctionComponent<LoginPageProps> = ({ setCurrentPage }) => {
	const [loginDetails, setLoginDetails] = useState<LoginDetails>({ email: '', password: '' });

	const onChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setLoginDetails({ ...loginDetails, [target.id]: target.value });
	};

	const loginAttempt = async () => {
		try {
			const login = await loginUserAttempt(loginDetails);
			if (login.status !== 200) console.log('ERROR WITH LOGIN');
			const token = login.headers.authorization;
			Cookies.set(constants.token_name, token, { path: '/' });
			setCurrentPage({ page: 'main' });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const token = Cookies.get(constants.token_name);
		if (!token) return;

		// Changing 'page' to the main screen as user is logged in..
		//! Check user via API CALL?
		setCurrentPage({ page: 'main' });
	}, []);

	return (
		<div className="login-container">
			<h1 className="title">Todooy</h1>
			<input id="email" type="text" className="text-input" placeholder="Enter email" onChange={onChange}></input>
			<input id="password" type="password" className="text-input" placeholder="Enter password" onChange={onChange}></input>
			<LongButton color={'blue'} clickFunction={loginAttempt} text="Login" />
			<LongButton color={'orange'} text={'Sign up'} />
			<p>forget password?</p>
		</div>
	);
};

export default LoginPage;
