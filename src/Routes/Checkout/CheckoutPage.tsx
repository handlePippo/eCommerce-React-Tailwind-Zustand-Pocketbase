import clsx from "clsx";
import { Button } from "@/Components/";
import useCheckout from "../../Hooks/useCheckout";

export default function CheckoutPage() {
  const { validators, actions, user, dirty, total } = useCheckout();
  const { isEmailValid, isNameValid, isSurnameValid, isValid } = validators;
  const { handleChange, handleSubmit } = actions;

  return (
    <div className='max-w-sm mx-auto'>
      <h1 className='title'>CHECKOUT</h1>

      <div className='text-xl my-3 border-b'>$ {total}</div>

      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        Your name:
        <input
          className={clsx({ "error": !isNameValid && dirty })}
          type='text'
          name='name'
          placeholder='Your name'
          value={user.name}
          onChange={handleChange}
        />
        Your surname:
        <input
          className={clsx({ "error": !isSurnameValid && dirty })}
          type='text'
          name='surname'
          placeholder='Your surname'
          value={user.surname}
          onChange={handleChange}
        />
        Your email:
        <input
          className={clsx({ "error": !isEmailValid && dirty })}
          type='text'
          name='email'
          placeholder='namesurname@email.com'
          value={user.email}
          onChange={handleChange}
        />
        <Button
          type='submit'
          disabled={!isValid}
          className={clsx("btn", { "primary": !isValid, "success": isValid })}
          name='Confirm'
        />
      </form>
    </div>
  );
}
