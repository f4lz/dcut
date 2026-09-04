import { Button } from "@mantine/core";
import { useUserStore } from "@/entities/user";

export const LogoutButton = () => {
  const logout = useUserStore((state) => state.logout);

  return (
    <Button variant="outline" onClick={logout}>
      Выйти
    </Button>
  );
};
