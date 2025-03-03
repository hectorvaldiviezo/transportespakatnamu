import { api } from "@/lib/config";
import { AxiosRequestConfig } from "axios";
import { SedeResponse } from "./sedes.interface";

export async function getSedes(empresaId: number): Promise<SedeResponse> {
  const config: AxiosRequestConfig = {
    params: {
      empresaId: empresaId,
    },
  };
  const { data } = await api.get<SedeResponse>(`/getSedes`, config);
  return data;
}
