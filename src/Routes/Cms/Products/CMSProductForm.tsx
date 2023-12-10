import { Button, Input } from "@/Components/";
import { Product } from "@/Model/";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

export type CMSProductFormPropsType = {
  activeItem: Partial<Product> | null;
  onCloseMenu: () => void;
  onAddProduct: (p: Partial<Product>) => void;
  onEditProduct: (p: Partial<Product>) => void;
};

const initialState: Partial<Product> = {
  name: "",
  cost: 0,
  description: "",
};

export default function CMSProductForm(props: CMSProductFormPropsType) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (props.activeItem?.id) {
        props.onEditProduct(formData);
        return;
      }
      props.onAddProduct(formData);
    },
    [formData, props]
  );

  useEffect(() => {
    setFormData({ ...props.activeItem } ?? initialState);
  }, [props.activeItem]);

  const isNameValid = formData.name?.length;
  const isValid = isNameValid;

  return (
    <div
      className={clsx(
        "fixed bg-slate-200 z-10 text-black top-0 w-96  h-full transition-all",
        {
          "-right-96": !props.activeItem,
          "right-0": props.activeItem,
        }
      )}
    >
      <form onSubmit={handleSubmit}>
        <div className='flex justify-around h-16'>
          <Button
            className='text-white w-1/2 bg-slate-500 hover:bg-slate-600 '
            name='CLOSE'
            onClick={props.onCloseMenu}
          />
          <Button
            type='submit'
            className='text-whitw w-1/2 bg-green-500 hover:bg-green-600 disabled:opacity-30'
            name='SAVE'
            disabled={!isValid}
          />
        </div>
        <div className='flex flex-col gap-3 mx-3 mt-16'>
          Product Name:
          <Input
            className={clsx({ "error": !isNameValid })}
            name='name'
            type='text'
            value={formData.name ?? ""}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
