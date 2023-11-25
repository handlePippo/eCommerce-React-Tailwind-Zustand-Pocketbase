import { pb } from "@/Constants/";
import { Product } from "../../Model/Product";

export const PB_Get = () => pb.collection("products").getList<Product>();

export const PB_Delete = (id: string) => pb.collection("products").delete(id);

export const PB_Add = (product: Partial<Product>) =>
  pb.collection("products").create<Product>(product);

export const PB_Update = (product: Partial<Product>) =>
  pb.collection("products").update<Product>(product.id!, product);
