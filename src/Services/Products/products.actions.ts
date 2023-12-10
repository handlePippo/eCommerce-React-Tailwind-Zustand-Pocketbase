import { Product } from "@/Model/";

export type GetProductsSuccess = {
  type: "getProductsSuccess";
  payload: Product[];
};

export type DeleteProductsSuccess = {
  type: "deleteProductsSuccess";
  payload: string;
};

export type AddProductsSuccess = {
  type: "addProductsSuccess";
  payload: Product;
};

export type UpdateProductsSuccess = {
  type: "updateProductsSuccess";
  payload: Product;
};

export type SetActiveProductSuccess = {
  type: "setActiveProductSuccess";
  payload: Partial<Product> | null;
};

export type ResetActiveProductSuccess = {
  type: "resetActiveProductSuccess";
  payload: null;
};

export type Pending = {
  type: "pending";
  payload: boolean;
};

export type Error = {
  type: "error";
  payload: string;
};

export type ProductsActions =
  | GetProductsSuccess
  | AddProductsSuccess
  | UpdateProductsSuccess
  | DeleteProductsSuccess
  | SetActiveProductSuccess
  | ResetActiveProductSuccess
  | Pending
  | Error;
