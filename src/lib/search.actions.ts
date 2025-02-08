import { AxiosRequestConfig } from "axios";
import api from "./config";

export interface Main {
  status: number;
  data: Data;
}

export interface Data {
  success: boolean;
  dni: string;
  nombre: string;
}

export async function searchByDNI(dni: string): Promise<Main> {
  const config: AxiosRequestConfig = {
    params: {
      dni,
    },
  };
  const { data } = await api.get<Main>(`searchPersonByDNI`, config);
  return data;
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
