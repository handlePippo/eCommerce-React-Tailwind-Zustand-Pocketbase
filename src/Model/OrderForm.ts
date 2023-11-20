import { CartItem } from ".";

export type OrderStatus = "pending" | "done";

export type UserType = { name: string; email: string };

export type OrderInfoType = {
  status: OrderStatus;
  user: UserType;
  order: CartItem[];
  total: number;
};
