import { useReducer } from "react";
import {
  initialState,
  ordersReducer,
} from "../../Services/Orders/orders.reducer";
import {
  PB_AddOrder,
  PB_DeleteOrder,
  PB_GetOrders,
  PB_ToggleStatusOrder,
} from "../../Services/Orders/orders.api";
import { OrderInfoType, OrderStatus } from "@/Model/";

export default function useOrdersService() {
  const [state, dispatch] = useReducer(ordersReducer, initialState);

  async function handleGetOrders() {
    dispatch({ type: "pending", payload: true });
    try {
      const res = await PB_GetOrders();
      dispatch({ type: "ordersGetSuccess", payload: res.items });
    } catch (e) {
      dispatch({ type: "error", payload: "Orders not loaded" });
    }
  }

  async function handleDeleteOrder(id: string) {
    dispatch({ type: "pending", payload: true });
    try {
      await PB_DeleteOrder(id);
      dispatch({ type: "orderDeleteSuccess", payload: id });
    } catch (e) {
      dispatch({ type: "error", payload: "Order not deleted" });
    }
  }

  async function handleAddOrder(order: OrderInfoType) {
    dispatch({ type: "pending", payload: true });
    try {
      return await PB_AddOrder(order);
    } catch (e) {
      dispatch({ type: "error", payload: "Order not added" });
      return e;
    }
  }

  async function handleToggleOrderStatus(id: string, status: OrderStatus) {
    dispatch({ type: "pending", payload: true });
    try {
      const res = await PB_ToggleStatusOrder(id, status);
      dispatch({ type: "orderToggleStatusSuccess", payload: res });
    } catch (e) {
      dispatch({ type: "error", payload: "Order not deleted" });
    }
  }

  return {
    state,
    actions: {
      handleGetOrders,
      handleDeleteOrder,
      handleAddOrder,
      handleToggleOrderStatus,
    },
  };
}
