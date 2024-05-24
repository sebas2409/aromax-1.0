import {create} from "zustand";
import {Perfume} from "../interfaces/perfume.ts";

interface CartStoreState {
    perfums: Perfume[];
    addPerfume: (perfume: Perfume) => void;
    removePerfume: (perfume: Perfume) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStoreState>((set) => ({
    perfums: [],
    addPerfume: (perfume) => set((state) => ({perfums: [...state.perfums, perfume]})),
    removePerfume: (perfume) => set((state) => ({perfums: state.perfums.filter((p) => p.name !== perfume.name)})),
    clearCart: () => set({perfums: []}),
}));