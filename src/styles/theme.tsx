import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  initialColorModeName: "light",
  colors: {
    yellow: {
      300: "#FFBA0850",
      500: "#FFBA08",
    },
    brand: {
      10: "rgba(153, 153, 153, 0.5)",
      50: "#FFFFFF",
      200: "#F5F8FA",
      500: "#999999",
      700: "#47585B",
      900: "#1a202c",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#F5F8FA", "brand.900")(props),
        color: mode("#47585B", "#F5F8FA")(props),
      },
      ".swiper-button-next": {
        right: [8, 10],
        _after: {
          color: "yellow.500",
        },
      },
      ".swiper-button-prev": {
        left: [8, 10],
        _after: {
          color: mode("#47585B", "#F5F8FA")(props),
        },
      },
      ".swiper-pagination-bullet": {
        w: [2, 4],
        h: [2, 4],
        bg: "#999999",
        opacity: 0.9,
      },
      ".swiper-pagination-bullet-active": {
        bg: "yellow.500",
      },
    }),
  },
});

const overrides = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
        lineHeight: "base",
      },
    }),
  },
});

export default theme;
