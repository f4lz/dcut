import { Container } from "@mantine/core";
import { Header } from "@/widgets/header/index";
import { MainCarousel } from "@/widgets/main-carousel";

export const Home = () => {
  return (
    <>
      <Header />
      <Container px="md" py="md" size="lg">
        <MainCarousel />
      </Container>
    </>
  );
};
