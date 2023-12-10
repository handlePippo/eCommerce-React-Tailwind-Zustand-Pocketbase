import { Input, Button } from "@/Components/";
import { ApiError } from "@/Errors/";
import { selectAuthError, selectAuthIsLogged, useAuth } from "@/Services/";
import clsx from "clsx";
import useLogin from "../../Hooks/useLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const { validations, actions, data } = useLogin();
  const error = useAuth(selectAuthError);
  const isLogged = useAuth(selectAuthIsLogged);

  useEffect(() => {
    if (isLogged) navigate("/cms");
  }, [isLogged, navigate]);

  return (
    <div className='page-sm'>
      <h1 className='title'>LOGIN</h1>

      <form className='flex flex-col gap-3' onSubmit={actions.handleSubmit}>
        <Input
          className={clsx({ "error": !validations.isUsernameValid })}
          type='email'
          placeholder='Il tuo username'
          name='username'
          value={data.username}
          onChange={actions.handleChange}
        />
        <Input
          className={clsx({ "error": !validations.isPasswordValid })}
          type='password'
          placeholder='La tua password'
          name='password'
          value={data.password}
          onChange={actions.handleChange}
        />
        <Button
          className='btn primary'
          type='submit'
          name='SIGN IN'
          disabled={!validations.isValid}
        />
      </form>
      {error && <ApiError error='Errore di autenticazione' />}
    </div>
  );
}
