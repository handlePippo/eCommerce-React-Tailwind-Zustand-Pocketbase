import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderInfoType } from "../../Model/OrderForm";
import {
  selectCartTotalCost,
  selectCartList,
} from "../../Services/Cart/cart.selectors";
import { useCart } from "../../Services/Cart/useCart";

export const EMAIL_REGEX: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function useCheckout() {
  const navigate = useNavigate();
  const [dirty, setDirty] = useState(false);
  const [user, setUser] = useState({ name: "", surname: "", email: "" });
  const total = useCart(selectCartTotalCost);
  const resetCart = useCart((s) => s.resetCart);
  const order = useCart(selectCartList);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser((prev) => ({ ...prev, [name]: value }));
    setDirty(true);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const orderInfo: OrderInfoType = {
        user,
        order,
        total,
        status: "pending",
      };
      console.log(orderInfo);
      resetCart();
      navigate("/thankyou");
    },
    [navigate, order, resetCart, total, user]
  );

  const isNameValid = user.name.length > 3;
  const isSurnameValid = user.surname.length > 3;
  const isEmailValid = user.email.match(EMAIL_REGEX);

  const isValid = useMemo(
    () => isNameValid && isSurnameValid && isEmailValid,
    [isEmailValid, isNameValid, isSurnameValid]
  );

  return {
    validators: { isValid, isNameValid, isSurnameValid, isEmailValid },
    actions: {
      handleSubmit,
      handleChange,
    },
    user,
    dirty,
    total,
  };
}
