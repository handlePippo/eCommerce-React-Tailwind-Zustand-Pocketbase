import { useNavigate } from "react-router-dom";
import { Button, ProductInCart } from "@/Components/";
import {
  selectCartList,
  selectCartTotalCost,
  useCart,
  useCartPanel,
} from "@/Services/";

export default function CartPanel() {
  const navigate = useNavigate();
  const list = useCart(selectCartList);
  const total = useCart(selectCartTotalCost);
  const close = useCartPanel((s) => s.closeOverlay);
  const reset = useCart((s) => s.resetCart);

  const handleNavigateToCart = () => {
    navigate("cart");
    close();
  };

  return (
    <div className='fixed bg-slate-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96'>
      <ul className='flex flex-col gap-4'>
        {list.map((p) => (
          <ProductInCart
            key={p.product.id}
            name={p.product.name}
            price={p.product.cost}
            total={p.qty * p.product.cost}
            qt={p.qty}
          />
        ))}
      </ul>
      <div className='my-3 flex justify-end text-xl font-bold'>
        Total: $ {total}
      </div>
      <div className='flex justify-center'>
        <Button
          className='btn primary'
          name='Go to Checkout'
          onClick={handleNavigateToCart}
        />
        <Button className='btn primary' name='Reset' onClick={reset} />
      </div>
    </div>
  );
}
