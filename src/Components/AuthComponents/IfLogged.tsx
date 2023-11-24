import React, { PropsWithChildren } from "react";
import { selectAuthIsLogged, useAuth } from "../../Services/Auth";

export type IfLoggedPropsType = {
  else?: React.ReactNode;
};

export default function IfLogged(props: PropsWithChildren<IfLoggedPropsType>) {
  const isLogged = useAuth(selectAuthIsLogged);

  return <>{isLogged ? props.children : props.else}</>;
}
