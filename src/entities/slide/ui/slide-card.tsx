import { Badge, Card, Flex, Text } from "@mantine/core";
import { useSlideStore } from "../model/store";
import type { Slide } from "../model/types";

type Props = {
  slide: Slide;
  children: React.ReactNode;
};

export const SlideCard = ({ children, slide }: Props) => {
  const toggleSlideChecked = useSlideStore((state) => state.toggleSlideChecked);

  return (
    <Card
      h="100%"
      shadow="sm"
      padding="xl"
      radius="sm"
      withBorder
      display="flex"
      style={{ flexDirection: "column", cursor: "pointer" }}
      onClick={() => toggleSlideChecked(slide.id)}
    >
      <Flex justify="space-between" align="flex-start">
        <Text fw={600} size="xl">
          {slide.title}
        </Text>
        <Badge size="lg" color={slide.isChecked ? "green" : "red"}>
          {slide.isChecked}
        </Badge>
      </Flex>
      <Text c="dimmed" mt="xs" size="md">
        {slide.annotation}
      </Text>
      {children && (
        <Flex justify="flex-end" mt="auto" pt="md">
          {children}
        </Flex>
      )}
    </Card>
  );
};
