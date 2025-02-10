import api from "@/lib/config";
import {
  ComplaintRequest,
  ComplaintSearch,
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

export async function searchComplaint(code: string): Promise<ComplaintSearch> {
  const { data } = await api.get<ComplaintSearch>(`/getReclamoByCode/${code}`);
  return data;
}
