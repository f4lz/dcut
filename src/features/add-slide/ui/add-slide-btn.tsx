import { useSlideStore } from "@/entities/slide";
import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

export const AddSlideButton = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const addSlide = useSlideStore((state) => state.addSlide);
  const form = useForm({
    initialValues: {
      title: "",
      annotation: "",
    },
    validate: {
      title: (value) => (value.trim() ? null : "Введите заголовок"),
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    addSlide(values);
    form.reset();
    close();
  });

  return (
    <>
      <Button onClick={open} mt="md">
        Добавить слайд
      </Button>
      <Modal opened={opened} onClose={close} title="Новый слайд">
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="sm">
            <TextInput
              withAsterisk
              label="Заголовок"
              placeholder="Введите заголовок"
              {...form.getInputProps("title")}
            />
            <TextInput
              withAsterisk
              label="Аннотация"
              placeholder="Введите аннотацию"
              {...form.getInputProps("annotation")}
            />
            <Button fullWidth type="submit">
              Добавить слайд
            </Button>
          </Flex>
        </form>
      </Modal>
    </>
  );
};
