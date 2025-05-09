import { AxiosRequestConfig } from "axios";
import { apiMilla, EMPRESA_ID } from "@/lib/config";
import { SocioResource } from "./socios.interface";

export async function getSocios(): Promise<SocioResource[]> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
    },
  };
  const { data } = await apiMilla.get<SocioResource[]>(`/clients`, config);
  return data;
}
