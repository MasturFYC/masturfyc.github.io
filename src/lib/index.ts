export type iAccount = {
	id: number;
	root: number;
	name: string;
	description?: string;
	name_en?: string;
};
export type UnitKoperasi = {
	id: number;
	name: string;
	description?: string;
};

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
	code: string;
};

export type TransactionDetail = {
	id: number;
	trx_id: number;
	account_id: number;
	description?: string;
	debt: number;
	cred: number;
	ref_id: number;
	name?: string;
	is_new?: boolean;
	is_deleted?: boolean;
	is_updated?: boolean;
};

export type Transaction = {
	id: number;
	name: string;
	member_id: number;
	description?: string;
	created_at: string;
	updated_at: string;
	is_valid: boolean;
	updated_by?: string;
	details?: TransactionDetail[];
};

export const numberFormater = Intl.NumberFormat('id-ID', {
	minimumFractionDigits: 2,
	minimumSignificantDigits: 1,
	useGrouping: true
});

export type Loan = {
	trx_id: number;
	nominal: number;
	provision: number;
	period: number;
	principal: number;
	service_price: number;
};

export type LoanTransaction = Transaction & {loan: Loan};

export type PropertyValue = {
	id: number;
	name: string;
}