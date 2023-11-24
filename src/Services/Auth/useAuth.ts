import { create } from "zustand";
import { getToken, isLogged, login, logout } from "./auth.api";

export type AuthState = {
  token: string | null;
  isLogged: boolean;
  error: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  token: getToken(),
  error: false,
  isLogged: isLogged(),
  login: async (username, password) => {
    set({ isLogged: false, error: false });
    try {
      await login(username, password);
      set({ isLogged: isLogged(), token: getToken() });
    } catch (error) {
      set({ error: true, isLogged: false });
    }
  },
  logout: () => {
    logout();
    set({ isLogged: false, token: null });
  },
}));
