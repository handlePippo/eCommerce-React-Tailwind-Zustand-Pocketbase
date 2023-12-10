import clsx from "clsx";
import React, { useCallback } from "react";
import { Product } from "@/Model/";

export type CMSProductListPropsType = {
  products: Product[];
  activeItem: Partial<Product> | null;
  onEditItem: (p: Partial<Product>) => void;
  onDeleteProduct: (id: string) => void;
};

export default function CMSProductList(props: CMSProductListPropsType) {
  const handleDelete = useCallback(
    (p: Product, e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.stopPropagation();
      props.onDeleteProduct(p.id);
    },
    [props]
  );

  return (
    <table className='table-auto w-full hover'>
      <thead>
        <tr>
          <th className='text-left'>PRODUCTS</th>
          <th className='text-left'>IMAGE</th>
          <th>COST</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((p: Product) => (
          <tr
            key={p.id}
            onClick={() => props.onEditItem(p)}
            className={clsx("cursor-pointer", {
              "bg-sky-200 text-black pointer-events-none":
                p.id === props.activeItem?.id,
            })}
          >
            <td>{p.name}</td>
            <td>
              {p.tmb && (
                <img src={p.tmb} alt={p.name} className='h-16 rounded-xl' />
              )}
            </td>
            <td className='text-center'>{p.cost} $</td>
            <td className='text-center'>
              <i
                className='fa fa-trash cursor-pointer'
                onClick={(e) => handleDelete(p, e)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
