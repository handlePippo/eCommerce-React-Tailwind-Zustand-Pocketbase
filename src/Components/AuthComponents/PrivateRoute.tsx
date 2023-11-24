import React, { PropsWithChildren } from "react";
import { selectAuthIsLogged, useAuth } from "../../Services/Auth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props: PropsWithChildren) {
  const isLogged = useAuth(selectAuthIsLogged);

  return <>{isLogged ? props.children : <Navigate to='/login' />}</>;
}
