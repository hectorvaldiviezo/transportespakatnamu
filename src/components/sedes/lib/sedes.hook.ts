import { useQuery } from "@tanstack/react-query";
import { getSedes } from "./sedes.actions";

export const useSedes = (empresaId: number) => {
  return useQuery({
    queryKey: ["sedes_index"],
    queryFn: () => getSedes(empresaId),
    refetchOnWindowFocus: false,
  });
};
