import { CartState } from "./useCart";

export const selectCartList = (state: CartState) => state.list;

export const selectCartIsEmpty = (state: CartState) => state.list.length === 0;

export const selectCartTotalCost = (state: CartState) =>
  state.list.reduce((acc, el) => acc + el.product.cost * el.qty, 0);

export const selectCartTotalItem = (state: CartState) =>
  state.list.reduce((acc, el) => acc + el.qty, 0);
