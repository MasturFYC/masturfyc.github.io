export * from './undangan-tahlil'

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