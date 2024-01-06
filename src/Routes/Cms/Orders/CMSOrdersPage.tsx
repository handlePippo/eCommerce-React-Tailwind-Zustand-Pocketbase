import { useEffect } from "react";
import useOrdersService from "../../../Hooks/useOrdersService";
import { Loader } from "@/Components/";
import { ApiError } from "@/Errors/";
import { OrderStatusEnum } from "../../../Model/OrderForm";

export default function CMSOrderPage() {
  const { actions, state } = useOrdersService();

  useEffect(() => {
    actions.handleGetOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {state.pending && <Loader />}
      {state.error && <ApiError error={state.error} />}
      <h1 className='title'>CMS</h1>
      <table className='border-collapse table-auto w-full my-12'>
        <thead>
          <tr>
            <th className='text-left'>CLIENT / DATE</th>
            <th className='text-left'>ORDER INFO</th>
            <th className='text-center'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {state.orders.map((o) => {
            return (
              <tr className='h-24' key={o.id}>
                <td>
                  <div className='text-xl font-bold'>{o.user.name}</div>
                  <div>{new Date(o.created).toLocaleDateString()}</div>
                </td>
                <td className='text-left'>
                  <div>Total: € {o.total}</div>
                  <div>{o.order.length} products</div>
                </td>
                <td className='text-center'>
                  {o.status === OrderStatusEnum.Pending && (
                    <button
                      className='btn primary'
                      onClick={() =>
                        actions.handleToggleOrderStatus(
                          o.id,
                          OrderStatusEnum.Done
                        )
                      }
                    >
                      Mark as Done
                    </button>
                  )}
                  <button
                    className='btn danger'
                    onClick={() => actions.handleDeleteOrder(o.id)}
                  >
                    <i className='fa fa-trash' />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
