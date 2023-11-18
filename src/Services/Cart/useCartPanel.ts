import { create } from "zustand";

export type CartStateOverlay = {
  open: boolean;
  toggle: () => void;
  openOverlay: () => void;
  closeOverlay: () => void;
};

export const useCartPanel = create<CartStateOverlay>((set, get) => ({
  open: false,
  toggle: () => set({ open: !get().open }),
  openOverlay: () => set({ open: true }),
  closeOverlay: () => set({ open: false }),
}));
