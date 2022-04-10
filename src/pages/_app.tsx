import { AppProps } from "next/app";

import { Chakra } from "../context/Chakra";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/a11y/a11y.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export { getServeSideProps } from "../context/Chakra";
