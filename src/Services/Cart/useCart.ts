import { create } from "zustand";
import { CartItem } from "../../Model/CartItem";
import { Product } from "../../Model/Product";

export type CartState = {
  list: CartItem[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  resetCart: () => void;
};

export const useCart = create<CartState>((set, get) => ({
  list: [],

  addToCart: (product: Product) => {
    const found = get().list.find((p) => p.product.id === product.id);

    if (found) get().increaseQty(product.id);
    else set({ list: [...get().list, { product, qty: 1 }] });
  },

  removeFromCart: (id: string) =>
    set({ list: get().list.filter((p) => p.product.id !== id) }),

  increaseQty: (id: string) => {
    const found = get().list.find((p) => p.product.id === id);
    if (found) {
      found.qty++;
      set({
        list: get().list.map((p) =>
          p.product.id === found.product.id ? found : p
        ),
      });
    }
  },

  decreaseQty: (id: string) => {
    const found = get().list.find((p) => p.product.id === id);
    if (found?.qty === 1) {
      get().removeFromCart(id);
      return;
    }
    if (found) {
      found.qty--;
      set({
        list: get().list.map((p) =>
          p.product.id === found.product.id ? found : p
        ),
      });
    }
  },

  resetCart: () => set({ list: [] }),
}));
