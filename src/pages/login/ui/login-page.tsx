import { AuthForm } from "@/features/auth";
import { useUserStore } from "@/entities/user";
import { Navigate } from "react-router-dom";
import { Center, Paper } from "@mantine/core";

export const Login = () => {
  const isAuth = useUserStore((state) => state.isAuth);

  return isAuth ? (
    <Navigate to="/" replace />
  ) : (
    <Center h="100vh">
      <Paper shadow="sm" p="xl" w={400} withBorder>
        <AuthForm />
      </Paper>
    </Center>
  );
};
