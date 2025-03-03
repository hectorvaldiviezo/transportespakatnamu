import { AxiosRequestConfig } from "axios";
import { api } from "./config";

export interface Main {
  status: number;
  data: Data;
}

export interface Data {
  success: boolean;
  dni: string;
  nombre: string;
}

export interface MainRUC {
  status: number;
  data: DataRUC;
}

export interface DataRUC {
  success: boolean;
  ruc: string;
  nombre_o_razon_social: string;
  estado_del_contribuyente: string;
  condicion_de_domicilio: string;
  ubigeo: string;
  tipo_de_via: string;
  nombre_de_via: string;
  codigo_de_zona: string;
  tipo_de_zona: string;
  numero: string;
  interior: string;
  lote: string;
  dpto: string;
  manzana: string;
  kilometro: string;
  distrito: string;
  provincia: string;
  departamento: string;
  direccion_simple: string;
  direccion: string;
  actualizado_en: Date;
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
  const config: AxiosRequestConfig = {
    params: {
      ruc,
    },
  };
  const { data } = await api.get<MainRUC>(`searchPersonByRUC`, config);
  return data;
}
