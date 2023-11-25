import React, { PropsWithChildren } from "react";
import { selectAuthIsLogged, useAuth } from "@/Services/";

export type IfLoggedPropsType = {
  else?: React.ReactNode;
};

export default function IfLogged(props: PropsWithChildren<IfLoggedPropsType>) {
  const isLogged = useAuth(selectAuthIsLogged);

  return <>{isLogged ? props.children : props.else}</>;
}

/////////////

type Color = "Red" | "Violet";

export type User = {
  id: number;
  name: string;
  color: Color;
  description: string;
};
