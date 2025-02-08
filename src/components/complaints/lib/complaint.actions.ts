import api from "@/lib/config";
import {
  ComplaintRequest,
  ComplaintSuccessResponse,
} from "./complaint.interface";

export async function createComplaint(
  complaint: ComplaintRequest
): Promise<ComplaintSuccessResponse> {
  const { data } = await api.post<ComplaintSuccessResponse>(
    `/reclamo`,
    complaint
  );
  return data;
}
