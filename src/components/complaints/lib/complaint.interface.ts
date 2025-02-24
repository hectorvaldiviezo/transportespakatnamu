export interface ComplaintRequest {
  isVirtual: boolean;
  sedeVirtualId?: number;
  sedeId?: number;
  type: string;
  date: string;
  time: string;
  description: string;
  request: string;
  typeWell: string;
  motive: string[];
  amount: number;
  typeDocument: string;
  documentNumber: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  files: File[];
}

export interface ComplaintSuccessResponse {
  message: string;
  complaintCode: string;
}

export interface ComplaintSearch {
  id: number;
  complaintCode: string;
  isVirtual: boolean;
  sedeVirtualId?: number;
  sedeId: number;
  date: Date;
  time: string;
  number: string;
  timeToAnswer?: number;
  daysRegistered?: number;
  hash: string;
  answer?: string;
  fileAnswer?: string;
  verified: boolean;
  dateVerified?: Date;
  confirmed: boolean;
  dateConfirmed?: Date;
  inProcess: boolean;
  dateInProcess?: Date;
  attended: boolean;
  dateAttended?: Date;
  rejected: boolean;
  dateRejected?: Date;
  filed: number;
  dateFiled?: Date;
  type: string;
  description: string;
  request: string;
  typeWell: string;
  motive: string[];
  amount: number;
  typeDocument: string;
  documentNumber: string;
  fullName: string;
  email: string;
  file1?: string;
  file2?: string;
  phone: string;
  address: string;
  sedeName: string;
  direccion: string;
  logo: string;
  sedeVirtualName?: string;
  pdfComplaint: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
