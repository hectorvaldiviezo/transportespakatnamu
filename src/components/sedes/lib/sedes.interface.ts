export interface SedeRequest {
  empresaId: number;
}

export interface SedeResponse {
  sedes: SedeItem[];
  sedesVirtuals: SedesVirtual[];
}
export interface SedeItem {
  id: number;
  suc_abrev: string;
  abreviatura: string;
  empresa_id: number;
  ruc: string;
  razon_social: string;
  direccion: string;
  distrito: string;
  provincia: string;
  departamento: string;
  logo?: string;
}

export interface SedesVirtual {
  id: number;
  name: string;
}
