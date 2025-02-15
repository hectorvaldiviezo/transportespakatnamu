import { create } from "zustand";
import { ComplaintSearch } from "./complaint.interface";
import { searchComplaint } from "./complaint.actions";
import { errorToast, successToast } from "@/lib/core.function";
interface ComplaintState {
  complaintQuery: ComplaintSearch | null;
  complaintCode: string;
  setComplaintCode: (complaintCode: string) => void;
  loadComplaint: () => void;
}

export const useComplaintStore = create<ComplaintState>((set) => ({
  complaintQuery: null,
  complaintCode: "",
  setComplaintCode: (complaintCode) => set({ complaintCode }),
  loadComplaint: async () => {
    set({ complaintQuery: null });
    await searchComplaint(useComplaintStore.getState().complaintCode)
      .then((complaint) => {
        set({ complaintQuery: complaint });
        successToast("Reclamo encontrado");
      })
      .catch((error) => {
        errorToast("Reclamo no encontrado");
      });
  },
}));
