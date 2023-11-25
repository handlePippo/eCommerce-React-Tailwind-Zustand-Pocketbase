/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useReducer } from "react";
import { Button, Loader } from "@/Components/";
import { PB_Get } from "../../../Services/Products/products.api";
import {
  productsReducer,
  initialState,
} from "../../../Services/Products/products.reducer";

export default function CMSProductPage() {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const handleGetProducts = useCallback(async () => {
    dispatch({ type: "pending", payload: true });

    const { items } = await PB_Get();

    dispatch({ type: "getProductsSuccess", payload: items });
  }, []);

  return (
    <div>
      <h1 className='title'>CMS</h1>

      <hr className='my-8' />
      {state.pending && <Loader />}

      <Button name='Click' onClick={handleGetProducts} />
    </div>
  );
}
