import { AxiosRequestConfig } from "axios";
import api from "./config";

export async function searchByDNI(dni: string) {
  const config: AxiosRequestConfig = {
    params: {
      dni,
    },
  };
  return await api.get(`searchPersonByDNI`, config);
}
export async function searchByRUC(ruc: string) {
  try {
    const response = await fetch(`https://api.sunat.cloud/ruc/${ruc}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
