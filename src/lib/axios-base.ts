import axios from 'axios';
//import type {AxiosResponse} from 'axios'
import { user, user_role, refresh_token as refToken, acces_token as accToken } from './store';
const instance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

let access_token = '';
let refresh_token = '';
let current_user = '';
let current_role = '';

accToken.subscribe((o) => (access_token = o));
refToken.subscribe((o) => (refresh_token = o));
user.subscribe((o) => (current_user = o));
user_role.subscribe((o) => (current_role = o));

function saveToken(acc_token: string, refresh_token: string) {
	//  sessionStorage.setItem("access_token", access_token);
	//  localStorage.setItem("refresh_token", refresh_token);
	refToken.update((o) => (o = refresh_token));
	accToken.update((o) => (o = acc_token));
}

// function destroyToken() {
//   sessionStorage.removeItem("access_token");
//   localStorage.removeItem("refresh_token");
// }

instance.interceptors.request.use((config) => {
	//const access_token = access_token;//sessionStorage.getItem("access_token");

	if (access_token) {
		config.headers['Authorization'] = `Bearer ${access_token}`;
		config.headers['x-user'] = current_user;
		config.headers['x-role'] = current_role;
	}
	return config;
});

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return new Promise(async (resolve, reject) => {
			const originalRequest = error.config;
			if (
				error.response &&
				error.response.status === 401 &&
				error.config &&
				!error.config.__isRetryRequest &&
				refresh_token
			) {
				originalRequest._retry = true;
				const response = await instance
					.post(
						'/v1/refresh',
						{ refresh_token: refresh_token },
						{
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
					.then((res) => res.data)
					.then((data) => {
						// console.log("-----------==========-----", refreshToken);
						const { access_token, refresh_token } = data.tokens;
						saveToken(access_token, refresh_token);
						return instance(originalRequest);
					});
				resolve(response);
			}

			reject(error); //Promise.resolve(error);
		});
	}
);

export default instance;
//export type { AxiosResponse }
