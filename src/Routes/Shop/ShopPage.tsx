import { useCallback, useEffect } from "react";
import { Product } from "@/Model/";
import { useCart, useCartPanel } from "@/Services/";
import { useProductsService } from "@/Hooks/";
import ProductCard from "./ProductCard";
import { Loader } from "@/Components/";
import { ApiError } from "@/Errors/";

export default function ShopPage() {
  const { actions, state } = useProductsService();
  const open = useCartPanel((s) => s.openOverlay);
  const addToCart = useCart((s) => s.addToCart);

  const handleAdd = useCallback(
    (product: Partial<Product>) => {
      open();
      addToCart(product as Product);
    },
    [addToCart, open]
  );

  useEffect(() => {
    actions.handleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {state.pending && <Loader />}
      {state.error && <ApiError />}
      <h1 className='title'>SHOP</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-16 '>
        {state.products.map((p) => (
          <ProductCard key={p.id} product={p} onClick={handleAdd} />
        ))}
      </div>
    </div>
  );
}
