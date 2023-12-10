import { useEffect } from "react";
import { Button, Loader } from "@/Components/";
import { useProductsService } from "@/Hooks/";
import { ApiError } from "@/Errors/";
import CMSProductList from "./CMSProductList";
import CMSProductForm from "./CMSProductForm";

export default function CMSProductPage() {
  const { actions, state } = useProductsService();

  useEffect(() => {
    actions.handleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className='title'>CMS</h1>
      <hr className='my-8' />
      {state.pending && <Loader />}
      {state.error && <ApiError error={state.error} />}
      <div className='mt-12'>
        <CMSProductForm
          activeItem={state.activeItem}
          onCloseMenu={actions.resetActiveItem}
          onAddProduct={actions.handleAddProduct}
          onEditProduct={actions.handleUpdateProduct}
        />
        <CMSProductList
          products={state.products}
          activeItem={state.activeItem}
          onEditItem={actions.setActiveItem}
          onDeleteProduct={actions.handleDeleteProducts}
        />
        <Button
          className='btn primary'
          name='ADD NEW'
          onClick={() => actions.setActiveItem({})}
        />
      </div>
    </div>
  );
}
