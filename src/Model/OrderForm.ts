import { CartItem } from "@/Model/";

export type OrderStatus = "pending" | "done";

export type OrderUser = { name: string; email: string };

export enum OrderStatusEnum {
  "Pending" = "pending",
  "Done" = "done",
}
export type OrderForm = {
  status: OrderStatus;
  user: OrderUser;
  order: CartItem[];
  total: number;
};
