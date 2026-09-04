import { Button, Flex, TextInput } from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { useUserStore } from "@/entities/user";

export const AuthForm = () => {
  const login = useUserStore((state) => state.login);

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail("Введите корректный адрес электронной почты"),
      password: (value) =>
        value.length >= 3
          ? null
          : "Длина пароля должна быть не менее 3 символов",
    },
  });

  return (
    <form onSubmit={form.onSubmit(login)}>
      <Flex direction="column" gap="sm">
        <TextInput
          withAsterisk
          label="Email"
          type="email"
          placeholder="Введите почту"
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          {...form.getInputProps("password")}
        />

        <Button type="submit" fullWidth disabled={!form.isValid()}>
          Войти
        </Button>
      </Flex>
    </form>
  );
};
