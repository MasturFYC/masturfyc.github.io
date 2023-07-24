export type UnitKoperasi = {
	id: number;
	name: string;
	description?: string;
}

export type MemberKoperasi = {
	member_id: number;
	unit_id: number;
	name: string;
	created_at: string;
	address?: string;
	is_active: boolean;
	type_id: number;
	phone?: string;
	unit_name: string;
	description?: string;
};
