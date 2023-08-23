import { writable } from "svelte/store";

export const user = writable<string>('Mastur' || 'Agung')
export const role = writable<string>('ADMIN' || 'USER')