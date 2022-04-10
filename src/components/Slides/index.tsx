import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Virtual,
} from "swiper";

import { Flex } from "@chakra-ui/react";

import { SlideItem } from "./SlideItem";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y, Virtual]);

interface SlideItemProps {
  id: number;
  image: string;
  name: string;
  summary: string;
  url: string;
}

interface ContinentsProps {
  continents: Array<SlideItemProps>;
}

export function Slides({ continents }: ContinentsProps): JSX.Element {
  return (
    <Flex w="100%" h={[250, 450]} maxWidth={1240} mx="auto" mb={["5", "10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        style={{ width: "100%", flex: "1" }}
        virtual
      >
        {continents.map((continent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <SlideItem
              image={continent.image}
              name={continent.name}
              summary={continent.summary}
              url={continent.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
