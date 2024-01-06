import { Order } from "@/Model/";
import { OrdersActions } from "./orders.actions";

export type OrdersReducerStateType = {
  pending: boolean;
  error: string | null;
  orders: Order[];
};

export const initialState: OrdersReducerStateType = {
  pending: false,
  error: null,
  orders: [],
};

export const ordersReducer = (
  state: OrdersReducerStateType,
  action: OrdersActions
) => {
  switch (action.type) {
    case "ordersGetSuccess":
      return {
        ...state,
        orders: action.payload,
        error: null,
        pending: false,
      };
    case "orderDeleteSuccess":
      return {
        ...state,
        orders: state.orders.filter((u) => u.id !== action.payload),
        error: null,
        pending: false,
      };
    case "orderToggleStatusSuccess":
      return {
        ...state,
        orders: state.orders.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
        error: null,
        pending: false,
      };
    case "error":
      return { ...state, error: action.payload, pending: false };
    case "pending":
      return { ...state, pending: true, error: null };
    default:
      return state;
  }
};
