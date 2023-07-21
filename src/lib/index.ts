// place files you want to import through the `$lib` alias in this folder.
const baseURL = import.meta.env.VITE_API_URL;

export async function fetchUrl(url: string, ...params) {
	if(url.startsWith('/')) {
		return await fetch(baseURL + url, ...params);
	} else  {
		return await fetch(url, ...params);
	}
}