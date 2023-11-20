import { create } from "zustand";

export type CartOverlayState = {
  open: boolean;
  toggle: () => void;
  openOverlay: () => void;
  closeOverlay: () => void;
};

export const useCartOverlay = create<CartOverlayState>((set, get) => ({
  open: false,
  toggle: () => set({ open: !get().open }),
  openOverlay: () => set({ open: true }),
  closeOverlay: () => set({ open: false }),
}));
