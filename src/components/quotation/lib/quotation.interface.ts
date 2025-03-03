export interface QuotationRequest {
  document: string;
  fullName: string;
  email: string;
  phone: string;
  telephone: string;
  product: string;
  origin: string;
  destination: string;
  includeDelivery: boolean;
  includeLoadingOrUnloading: string;
  observations: string;
}

export interface QuotationResponse {
  status: number;
  message: string;
}
