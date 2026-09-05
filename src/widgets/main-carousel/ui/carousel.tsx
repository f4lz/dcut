import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useSlideStore } from "@/entities/slide";
import { SlideCard } from "@/entities/slide";
import { DeleteSlideButton } from "@/features/delete-slide";
import { AddSlideButton } from "@/features/add-slide";
import classes from "./carousel.module.css";

export const MainCarousel = () => {
  const slides = useSlideStore((state) => state.slides);
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <>
      <Carousel
        withIndicators
        classNames={{ indicator: classes.indicator }}
        slideSize={{ base: "100%", sm: "70%" }}
        slideGap="md"
        height={isMobile ? 320 : 400}
        mt="xl"
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: "center",
        }}
      >
        {slides.map((slide) => (
          <Carousel.Slide key={slide.id}>
            <SlideCard slide={slide}>
              <DeleteSlideButton slideId={slide.id} />
            </SlideCard>
          </Carousel.Slide>
        ))}
      </Carousel>
      <AddSlideButton />
    </>
  );
};
