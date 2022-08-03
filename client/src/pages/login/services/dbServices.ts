import axios from 'axios';
import { constants } from '../../../constants/urls';

// interfaces
import { LoginDetails } from '../interfaces/interface';

export const loginUserAttempt = async (details: LoginDetails) => {
	const request = await axios.request({
		url: `${constants.base_url}/users/sign_in`,
		method: 'POST',
		data: {
			user: {
				email: details.email,
				password: details.password,
			},
		},
	});

	return request;
};
