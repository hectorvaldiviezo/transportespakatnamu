export interface ComplaintRequest {
  sedeId: number;
  type: string;
  date: string;
  time: string;
  description: string;
  typeWell: string;
  amount: number;
  typeDocument: string;
  documentNumber: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export interface ComplaintSuccessResponse {
  message: string;
  complaintCode: string;
}
