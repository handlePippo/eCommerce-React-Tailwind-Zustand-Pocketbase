import { pb } from "@/Constants/";
import { Product } from "../../Model/Product";

export const PB_GetProducts = () =>
  pb.collection("products").getList<Product>();

export const PB_DeleteProduct = (id: string) =>
  pb.collection("products").delete(id);

export const PB_AddProduct = (product: Partial<Product>) =>
  pb.collection("products").create<Product>(product);

export const PB_UpdateProduct = (product: Partial<Product>) =>
  pb.collection("products").update<Product>(product.id!, product);
