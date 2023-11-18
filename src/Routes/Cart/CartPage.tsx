import { NavLink } from "react-router-dom";
import {
  useCart,
  selectCartIsEmpty,
  selectCartList,
  selectCartTotalCost,
} from "@/Services/";
import { Button } from "@/Components/";

export default function CartPage() {
  const list = useCart(selectCartList);
  const total = useCart(selectCartTotalCost);
  const isCartEmpty = useCart(selectCartIsEmpty);

  const increaseQty = useCart((s) => s.increaseQty);
  const decreaseQty = useCart((s) => s.decreaseQty);

  return (
    <div>
      <h1 className='title'>CART</h1>

      <ul>
        {list.map((p) => (
          <li
            key={p.product.id}
            className='flex flex-col sm:flex-row justify-between items-center gap-3 my-3 border-b border-blue-400 py-3'
          >
            <div className='flex items-center gap-3'>
              <img
                src={p.product.img}
                alt={p.product.description}
                className='w-24 rounded-xl'
              />
              <div className='font-bold'>{p.product.name}</div>
            </div>
            <div className='flex flex-col sm:flex-row  gap-4 items-center'>
              <div className='flex item-center gap-3 items-center'>
                <Button
                  className='btn primary'
                  name='-'
                  onClick={() => decreaseQty(p.product.id)}
                />
                <div>qty: {p.qty}</div>
                <Button
                  className='btn primary'
                  name='+'
                  onClick={() => increaseQty(p.product.id)}
                />
              </div>
              <div className=' w-18 text-center'>
                Cost: $ {p.product.cost * p.qty}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {!isCartEmpty ? (
        <>
          <div className='text-4xl text-right my-4 mr-4'>Total: $ {total}</div>
          <div className='flex justify-center'>
            <NavLink className='btn primary lg' to={"/checkout"}>
              Confirm Order
            </NavLink>
          </div>
        </>
      ) : (
        <div className='text-xl my-3'>
          Nessun elemento presente nel carrello!
        </div>
      )}
    </div>
  );
}
