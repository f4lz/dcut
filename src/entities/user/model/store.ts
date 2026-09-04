import { create } from "zustand";
import { tokenStorage } from "@/shared/lib/local-storage";

interface UserStore {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  isAuth: !!tokenStorage.get(),
  login: () => {
    tokenStorage.set(crypto.randomUUID());
    set({ isAuth: true });
  },
  logout: () => {
    tokenStorage.remove();
    set({ isAuth: false });
  },
}));
