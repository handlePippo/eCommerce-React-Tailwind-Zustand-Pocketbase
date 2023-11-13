import { Button } from "@/Components/";
import { Product } from "@/Model/Product";
import React from "react";

export type ProductCardProps = {
  product: Partial<Product>;
  onClick: (p: Partial<Product>) => void;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className='bg-white text-black shadow-2xl rounded-xl overflow-hidden'>
      {props.product.img && (
        <img
          src={props.product.img}
          alt={props.product.description}
          className='h-64 w-full object-cover'
        />
      )}
      <div className='flex justify-between items-center p-3 text-xl font-bold'>
        <div>{props.product.name}</div>
        <div>$ {props.product.cost}</div>
      </div>
      <p className='p-3'>{props.product.description}</p>
      <Button
        className='bg-sky-600 text-white hover:bg-sky-800 tranisition w-full text-center font-bold p-3'
        name='ADD TO CARD'
        onClick={() => props.onClick(props.product)}
      />
    </div>
  );
}
