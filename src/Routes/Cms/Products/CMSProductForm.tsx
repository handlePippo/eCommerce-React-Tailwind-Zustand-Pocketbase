import { useCallback, useEffect, useState } from "react";
import { Button, Input, TextArea } from "@/Components/";
import { Product } from "@/Model/";
import { useCloudinary } from "@/Hooks/";
import clsx from "clsx";

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
  tmb: "",
  img: "",
};

export default function CMSProductForm(props: CMSProductFormPropsType) {
  const { upload } = useCloudinary();
  const [formData, setFormData] = useState(initialState);
  const [dirty, setDirty] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.currentTarget;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setDirty(true);
    },
    [setFormData, setDirty]
  );

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

  const handleUploadImg = async () => {
    const res = await upload();
    if (res.type === "success") {
      setFormData((prev) => ({ ...prev, img: res.img, tmb: res.tmb }));
      return;
    }
    console.log(res.reason);
  };

  useEffect(() => {
    if (props.activeItem?.id) {
      setFormData({ ...props.activeItem });
      return;
    }
    setFormData(initialState);
  }, [props.activeItem]);

  const isNameValid = formData.name?.length && formData.name.length > 5;
  const isDescriptionValid =
    formData.description?.length && formData.description.length > 10;
  const isCostValid = formData.cost && formData.cost > 0;
  const isValid = isNameValid && isCostValid && isDescriptionValid;

  return (
    <div
      className={clsx(
        "fixed bg-slate-200 z-10 text-black top-0 w-96  h-full transition-all overflow-auto",
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
        {formData.img && (
          <img src={formData.img} alt={formData.name} className='w-full' />
        )}
        <div className='flex flex-col gap-3 mx-3 mt-16'>
          Product Name:
          <Input
            className={clsx({ "error": !isNameValid && dirty })}
            name='name'
            type='text'
            value={formData.name ?? ""}
            onChange={handleChange}
          />
          {!isNameValid && dirty && (
            <p className='font-semibold'>Il nome deve di almeno 5 caratteri</p>
          )}
          Product Cost:
          <Input
            className={clsx({ "error": !isCostValid && dirty })}
            name='cost'
            type='number'
            value={formData.cost ?? 0}
            onChange={handleChange}
          />
          {!isCostValid && dirty && (
            <p className='font-semibold'>
              Il costo deve essere maggiore di zero
            </p>
          )}
          Product Description:
          <TextArea
            className={clsx({ "error": !isDescriptionValid && dirty })}
            name='description'
            onChange={handleChange}
            value={formData.description ?? ""}
            about='bog'
            placeholder='Inserisci una descrizione del prodotto...'
          />
          {!isDescriptionValid && dirty && (
            <p className='font-semibold'>
              La descrizione deve essere di almeno 10 caratteri
            </p>
          )}
          <Button
            className='btn primary'
            name='UPLOAD IMAGE'
            onClick={handleUploadImg}
          />
        </div>
      </form>
    </div>
  );
}
