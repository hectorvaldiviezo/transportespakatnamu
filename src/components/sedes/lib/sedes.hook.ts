import { useQuery } from "@tanstack/react-query";
import { getSedes } from "./sedes.actions";
import { searchComplaint } from "@/components/complaints/lib/complaint.actions";

export const useSedes = (empresaId: number) => {
  return useQuery({
    queryKey: ["sedes_index"],
    queryFn: () => getSedes(empresaId),
    refetchOnWindowFocus: false,
  });
};

export const useReclamo = (code: string) => {
  return useQuery({
    queryKey: ["reclamo_get", code],
    queryFn: () => searchComplaint(code),
    refetchOnWindowFocus: false,
  });
};
