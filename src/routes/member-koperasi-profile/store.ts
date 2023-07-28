import type { Loan, TransactionDetail } from "$lib";

export const acc_provision = 402;
export const acc_service = 401;
export const acc_cash = 101;
export const acc_loan = 112;
export const acc_payment = 113;

export const initDetail: TransactionDetail = {
  id: 0,
  trx_id: 0,
  account_id: 0,
  description: '',
  debt: 0,
  cred: 0,
  ref_id: 0,
  name: '',
  is_new: true
};

export const initLoan: Loan = {
  trx_id: 0,
  nominal: 0,
  provision: 0,
  period: 10,
  principal: 0,
  service_price: 0
};
