import { AxiosRequestConfig } from "axios";
import { apiMilla, EMPRESA_ID } from "@/lib/config";
import { StatsResource } from "./stats.interface";

export async function getStats(): Promise<StatsResource[]> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
    },
  };
  const { data } = await apiMilla.get<StatsResource[]>(`/stats`, config);
  return data;
}
