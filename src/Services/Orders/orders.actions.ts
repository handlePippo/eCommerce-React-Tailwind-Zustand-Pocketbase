import { Order } from "@/Model/";

export type OrdersGetSuccess = { type: "ordersGetSuccess"; payload: Order[] };

export type OrderDeleteSuccess = {
  type: "orderDeleteSuccess";
  payload: string;
};

export type OrderReset = { type: "orderReset" };

export type OrderToggleStatusSuccess = {
  type: "orderToggleStatusSuccess";
  payload: Order;
};
export type Error = { type: "error"; payload: string };

export type Pending = { type: "pending"; payload: boolean };

export type OrdersActions =
  | OrdersGetSuccess
  | OrderDeleteSuccess
  | OrderReset
  | OrderToggleStatusSuccess
  | Error
  | Pending;
