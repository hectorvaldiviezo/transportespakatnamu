import { apiMilla } from "@/lib/config";
import { QuotationRequest, QuotationResponse } from "./quotation.interface";

export async function sendQuotation(
  quotation: QuotationRequest
): Promise<QuotationResponse> {
  const { data } = await apiMilla.post<QuotationResponse>(
    "/quotation",
    quotation
  );
  return data;
}
