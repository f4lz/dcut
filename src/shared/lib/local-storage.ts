interface TokenStorage {
  set: (token: string) => void;
  get: () => string | null;
  remove: () => void;
}

export const tokenStorage: TokenStorage = {
  set: (token) => localStorage.setItem("token", token),
  get: () => localStorage.getItem("token"),
  remove: () => localStorage.removeItem("token"),
};
