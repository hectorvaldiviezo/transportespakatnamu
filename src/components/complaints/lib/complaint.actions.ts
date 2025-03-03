import { api } from "@/lib/config";
import {
  ComplaintRequest,
  ComplaintSearch,
  ComplaintSuccessResponse,
} from "./complaint.interface";
import { AxiosRequestConfig } from "axios";

export async function createComplaint(
  complaint: ComplaintRequest
): Promise<ComplaintSuccessResponse> {
  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  // const formData = objectToFormData(complaint);

  const { data } = await api.post<ComplaintSuccessResponse>(
    `/reclamo`,
    complaint,
    config
  );
  return data;
}

export async function searchComplaint(code: string): Promise<ComplaintSearch> {
  const { data } = await api.get<ComplaintSearch>(`/getReclamoByCode/${code}`);
  return data;
}
