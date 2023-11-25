import { useState, useCallback, useMemo, FormEvent } from "react";
import { useAuth } from "@/Services/";

export type UserDataLogin = {
  username: string;
  password: string;
};

export default function useLogin() {
  const [data, setData] = useState<UserDataLogin>({
    username: "",
    password: "",
  });

  const login = useAuth((s) => s.login);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      login(data.username, data.password);
    },
    [data, login]
  );

  const isUsernameValid = data.username.length > 5;
  const isPasswordValid = data.password.length > 5;

  const isValid = useMemo(
    () => isUsernameValid && isPasswordValid,
    [isPasswordValid, isUsernameValid]
  );
  return {
    data,
    validations: {
      isPasswordValid,
      isUsernameValid,
      isValid,
    },
    actions: {
      handleChange,
      handleSubmit,
    },
  };
}
