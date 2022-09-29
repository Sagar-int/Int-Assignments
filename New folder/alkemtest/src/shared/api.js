import axios from 'axios';
import { store } from '../redux/store';

const instance = axios.create({
	baseURL: "https://alkemapi.indusnettechnologies.com/",
	headers: {
	  "Content-Type": "application/json",
	},
  });

// Add a request interceptor
instance.interceptors.request.use(
	(config) => {
		// Insert authorization token on request call
		const { auth_token } =  store.getState().AuthReducer
		const token = `Bearer ${auth_token}`;

		config.headers['Authorization'] = token;

		return config;
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
