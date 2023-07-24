import axios from 'axios';
//import type {AxiosResponse} from 'axios'
import { user, refresh_token as refToken, acces_token as accToken } from './store';
const instance = axios.create({ baseURL: 'http://localhost:8585/api' });
//const instance = axios.create({ baseURL: 'http://sapulidi.site/api' });

let access_token = '';
let refresh_token = '';

accToken.subscribe((o) => (access_token = o));
refToken.subscribe((o) => (refresh_token = o));

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
