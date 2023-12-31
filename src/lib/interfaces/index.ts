export * from './undangan-tahlil';

export type PDAMBranch = {
	id: number;
	name: string;
	address: string;
}

export type PDAMCustomer = {
	branchId: number;
	slId: string;
	name: string;
	address: string;
	branchName?: string;
	branchAddress?: string;
	isNew?: boolean;
	oldSlId?: string;
	createdAt?: string;
}

export type PDAM = {
	selected?: boolean;
	noSl: string;
	name: string;
	address: string;
	city: string;
	cabang: string;
};


export type iUserSecret = {
	id: string;
	name: string;
	callerId: string;
	lastCallerId: string;
	lastLoggedOut: string;
	service: string;
	profile: string;
	limitBytesIn: string;
	remoteAddress: string;
	lastDisconnectReason: string;
	limitByteOut: string;
	localAddress: string;
	ipv6Routes: string;
	comment: string;
	password: string;
	routes: string;
	disabled: string;
	// isActive: boolean;
};

export type iUserActive = {
	address: string;
	callerId: string;
	comment: string;
	encoding: string;
	id: string;
	limitBytesIn: string;
	limitBytesOut: string;
	name: string;
	radius: string;
	service: string;
	sessionId: string;
	uptime: string;
	customerId?: number;
};

export type iMember = {
	id: number;
	name: string;
	created_at: string;
	address?: string;
	phone: string;
	is_active: boolean;
	type_id: number
	is_special: boolean;
}

export type iCustomer = iMember & {
	unit_id: number;
	paket_id: number;
	unit_name: string;
	paket_name: string;
}

export type iUserRouter = {
	member_id: number;
	name: string;
	comment: string;
}