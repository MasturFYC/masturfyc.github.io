import type { MemberKoperasi } from '$lib';
import dayjs from 'dayjs';
import { writable } from 'svelte/store';

export const initMember: MemberKoperasi = {
	member_id: 0,
	unit_id: 0,
	name: '',
	created_at: dayjs().format('YYYY-MM-DD'),
	address: '',
	is_active: true,
	type_id: 1,
	phone: '',
	unit_name: '',
	description: '',
	code: ''
};

export let current_unit_id = writable(0);
