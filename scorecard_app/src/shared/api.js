import axios from 'axios';
import { store } from '../store';

const instance = axios.create({
	baseURL: "http://localhost:5000/api",
	headers: {
	  "Content-Type": "application/json",
	},
  });

// Add a request interceptor
instance.interceptors.request.use(
	(config) => {
		// Insert authorization token on request call
		const { auth_token } =  store.getState().AcademicReducer
		const token = auth_token;

		config.headers['Authorization'] = token;

		// return config;
		return window.navigator.onLine
		? config
		: Promise.reject({
				response: {
					data: { message: 'Check your internet connection', status: 1 },
					status: 400,
				},
		  });
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response && error.response.status === 401) {
			// dispatch(logout());
			window.location.href = '/';
			return Promise.reject(error.response);
		} else {
			return Promise.reject(error.response);
		}
	}
);

export default instance;
