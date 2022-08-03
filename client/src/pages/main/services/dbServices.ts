import axios from 'axios';
import { constants } from '../../../constants/urls';
import Cookies from 'js-cookie';

export const getAllTodos = async () => {
	const token = Cookies.get(constants.token_name)?.toString();
	if (!token) throw new Error('No token!');

	const request = await axios.request({
		withCredentials: true,
		url: `${constants.base_url}/users_todos`,
		method: 'GET',
		headers: {
			authorization: token,
		},
	});

	return request;
};

export const getAllCategories = async () => {
	const token = Cookies.get(constants.token_name)?.toString();
	if (!token) throw new Error('No token!');

	const request = await axios.request({
		withCredentials: true,
		url: `${constants.base_url}/users_categories`,
		method: 'GET',
		headers: {
			authorization: token,
		},
	});

	return request;
};

export const deleteTodo = async (id: string | number) => {
	const token = Cookies.get(constants.token_name)?.toString();
	if (!token) throw new Error('No token!');

	const request = await axios.request({
		withCredentials: true,
		url: `${constants.base_url}/todos/${id}`,
		method: 'DELETE',
		headers: {
			authorization: token,
		},
	});

	return request;
};

export const deleteCategory = async (id: string | number) => {
	const token = Cookies.get(constants.token_name)?.toString();
	if (!token) throw new Error('No token!');

	const request = await axios.request({
		withCredentials: true,
		url: `${constants.base_url}/categories/${id}`,
		method: 'DELETE',
		headers: {
			authorization: token,
		},
	});

	return request;
};
