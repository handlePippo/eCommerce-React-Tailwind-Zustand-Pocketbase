import { Product } from "@/Model/";
import { ProductsActions } from "./products.actions";

export type ProductsReducerStateType = {
  products: Product[];
  pending: boolean;
};

export const initialState: ProductsReducerStateType = {
  pending: false,
  products: [],
};

export const productsReducer = (
  state: ProductsReducerStateType,
  action: ProductsActions
) => {
  switch (action.type) {
    case "pending":
      return { ...state, pending: action.payload };
    case "error":
      return { ...state, error: action.payload };
    case "getProductsSuccess":
      return { pending: false, products: action.payload };
    default:
      return state;
  }
};
