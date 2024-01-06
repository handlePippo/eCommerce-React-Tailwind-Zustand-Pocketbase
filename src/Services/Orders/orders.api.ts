import { pb } from "@/Constants/";
import { Order, OrderInfoType } from "@/Model/";
import { OrderStatus } from "../../Model/OrderForm";

export const PB_GetOrders = async () =>
  await pb.collection("orders").getList<Order>();

export const PB_DeleteOrder = async (id: string) =>
  await pb.collection("orders").delete(id);

export const PB_AddOrder = async (order: OrderInfoType) =>
  await pb.collection("orders").create<Order>(order);

export const PB_ToggleStatusOrder = async (id: string, status: OrderStatus) =>
  await pb.collection("orders").update<Order>(id, { status });
