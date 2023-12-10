import { Product } from "@/Model/";
import { ProductsActions } from "./products.actions";

export type ProductsReducerStateType = {
  pending: boolean;
  error: string | null;
  activeItem: Partial<Product> | null;
  products: Product[];
};

export const initialState: ProductsReducerStateType = {
  pending: false,
  error: null,
  activeItem: null,
  products: [],
};

export const productsReducer = (
  state: ProductsReducerStateType,
  action: ProductsActions
) => {
  switch (action.type) {
    case "pending":
      return { ...state, error: null, pending: action.payload };

    case "error":
      return { ...state, error: action.payload, pending: false };

    case "getProductsSuccess":
      return {
        ...state,
        pending: false,
        error: null,
        products: action.payload,
      };

    case "deleteProductsSuccess":
      return {
        ...state,
        error: null,
        pending: false,
        activeItem:
          state.activeItem?.id === action.payload ? null : state.activeItem,
        products: state.products.filter((p) => p.id !== action.payload),
      };

    case "addProductsSuccess":
      return {
        ...state,
        error: null,
        pending: false,
        activeItem: null,
        products: [...state.products, action.payload],
      };

    case "updateProductsSuccess":
      return {
        ...state,
        error: null,
        pending: false,
        activeItem: null,
        products: state.products.map((p) => {
          if (p.id === action.payload.id) return action.payload;
          return p;
        }),
      };

    case "setActiveProductSuccess":
      return {
        ...state,
        error: null,
        pending: false,
        activeItem: action.payload,
      };

    case "resetActiveProductSuccess":
      return {
        ...state,
        error: null,
        pending: false,
        activeItem: action.payload,
      };
    default:
      return state;
  }
};
