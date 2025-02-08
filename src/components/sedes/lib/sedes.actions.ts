import api from "@/lib/config";
import { AxiosRequestConfig } from "axios";
import { SedeItem } from "./sedes.interface";

export async function getSedes(empresaId: number): Promise<SedeItem[]> {
  const config: AxiosRequestConfig = {
    params: {
      empresaId: empresaId,
    },
  };
  const { data } = await api.get<SedeItem[]>(`/getSedes`, config);
  return data;
}
