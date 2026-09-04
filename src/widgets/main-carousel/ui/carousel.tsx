import { Carousel } from "@mantine/carousel";
import { useSlideStore } from "@/entities/slide";
import { SlideCard } from "@/entities/slide";
import { DeleteSlideButton } from "@/features/delete-slide";
import { AddSlideButton } from "@/features/add-slide";
import classes from "./carousel.module.css";

export const MainCarousel = () => {
  const slides = useSlideStore((state) => state.slides);

  return (
    <>
      <Carousel
        withIndicators
        classNames={{ indicator: classes.indicator }}
        slideSize="70%"
        slideGap="md"
        height={400}
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
