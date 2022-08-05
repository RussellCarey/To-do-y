import axios from 'axios';
import { constants } from '../../../constants/urls';
import Cookies from 'js-cookie';

import { NewTodo } from '../interfaces/interfaces';

export const submitNewTodo = async (data: NewTodo) => {
	const token = Cookies.get(constants.token_name)?.toString();
	if (!token) throw new Error('No token!');

	const request = await axios.request({
		withCredentials: true,
		url: `${constants.base_url}/todos`,
		method: 'POST',
		headers: {
			authorization: token,
		},
		data: data,
	});

	return request;
};

export const editTodo = async (id: number | string, data: NewTodo) => {
	const token = Cookies.get(constants.token_name)?.toString();
	if (!token) throw new Error('No token!');

	const request = await axios.request({
		withCredentials: true,
		url: `${constants.base_url}/todos/${id}`,
		method: 'PATCH',
		headers: {
			authorization: token,
		},
		data: data,
	});

	return request;
};
