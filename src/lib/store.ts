import type { UnitKoperasi } from './index';
import { writable } from 'svelte/store';

let persistedUser = localStorage.getItem('user');
let persistedRole = localStorage.getItem('user_role');
let persistedToken = localStorage.getItem('refresh_token');
let persistedAccess = sessionStorage.getItem('access_token');
export let user = writable(persistedUser ? persistedUser : '');
export let refresh_token = writable(persistedToken ? persistedToken : '');
export let acces_token = writable(persistedAccess ? persistedAccess : '');
export let user_role = writable(persistedRole ? persistedRole : 'USER');

user.subscribe((u) => (localStorage.user = u));
refresh_token.subscribe((o) => (localStorage.refresh_token = o));
acces_token.subscribe((o) => (sessionStorage.access_token = o));
user_role.subscribe((o) => (localStorage.user_role = o));

export const search_name = writable('');
export let unit_koperasi = writable<UnitKoperasi[]>([]);
export const theme = writable<string>('light');
export const toggleTheme = writable<boolean>(false);
