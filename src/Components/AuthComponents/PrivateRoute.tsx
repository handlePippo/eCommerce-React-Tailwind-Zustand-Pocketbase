import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { selectAuthIsLogged, useAuth } from "@/Services/";

export default function PrivateRoute(props: PropsWithChildren) {
  const isLogged = useAuth(selectAuthIsLogged);

  return <>{isLogged ? props.children : <Navigate to='/login' />}</>;
}
