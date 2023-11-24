import { pb } from "../../Constants/Constants";

export const login = (username: string, password: string) =>
  pb.admins.authWithPassword(username, password);

export const logout = () => pb.authStore.clear();

export const getToken = () => pb.authStore.token;

export const isLogged = () => pb.authStore.isValid;
