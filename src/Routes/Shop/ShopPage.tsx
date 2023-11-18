import React, { useCallback, useEffect, useState } from "react";
import { pb } from "@/Constants/";
import { Product } from "@/Model/";
import ProductCard from "./ProductCard";
import { ApiError } from "@/Errors/";
import { Loader } from "@/Components/";
import { useCart, useCartPanel } from "@/Services/";

export default function ShopPage() {
  const [product, setProduct] = useState<Product[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const open = useCartPanel((s) => s.openOverlay);
  const addToCart = useCart((s) => s.addToCart);

  const handleAdd = useCallback(
    (product: Partial<Product>) => {
      open();
      addToCart(product as Product);
    },
    [addToCart, open]
  );

  const fetchProductsData = useCallback(async () => {
    setPending(true);
    try {
      const res = await pb.collection("products").getFullList<Product>();
      setProduct(res);
    } catch (error) {
      setError(true);
    } finally {
      setPending(false);
    }
  }, [setProduct]);

  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  return (
    <div>
      {pending && <Loader />}
      {error && <ApiError />}
      <h1 className='title'>SHOP</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-16 '>
        {product.map((p) => (
          <ProductCard key={p.id} product={p} onClick={handleAdd} />
        ))}
      </div>
    </div>
  );
}
