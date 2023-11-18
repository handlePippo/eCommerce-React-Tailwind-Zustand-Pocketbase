import React from "react";

export type ProductInCartProps = {
  name: string;
  price: number;
  total: number;
  qt: number;
};

export default function ProductInCart(props: ProductInCartProps) {
  return (
    <li className='border-b border-slate-600 flex justify-between items-center pb-3'>
      <div>{props.name}</div>
      <div className='flex gap-3'>
        <div>
          ({props.qt} X $ {props.qt * props.price})
        </div>
        <div>$ {props.price}</div>
      </div>
    </li>
  );
}
