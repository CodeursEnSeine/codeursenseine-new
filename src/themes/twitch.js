import { theme } from "@chakra-ui/react";
import LogoWhite from "./logos/meetup-white.svg";

const data = {
  pretitle: "Retrouvez Codeurs en Seine toute l'année !",
  title: "Live Twitch Codeurs en Seine",
};

const logos = {
  alt: "Codeurs en Seine - Meetups",
  white: LogoWhite,
};

const colors = {
  ...theme.colors,
  brand: {
    50: "#f2e4ff",
    100: "#d3b2ff",
    200: "#b380ff",
    300: "#954dfe",
    400: "#771cfd",
    500: "#5d03e3",
    600: "#4801b2",
    700: "#340080",
    800: "#1f004e",
    900: "#0c001e",
  },
};

const fonts = {
  body: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;',
  heading: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

const gradients = {
  brand: `linear-gradient(45deg, #954dfe, #4801b2)`,
};

const shadows = {
  ...theme.shadows,
  paper: `
    rgba(32, 47, 71, 0.06) 0px 0.8125rem 0.4375rem -0.4375rem,
    rgba(32, 47, 71, 0.08) 0.625rem 0.25rem 0.4375rem -0.5rem,
    rgba(32, 47, 71, 0.08) -0.625rem 0.25rem 0.4375rem -0.5rem,
    rgba(32, 47, 71, 0.06) 0px 0.1875rem 0.375rem 0px,
    rgba(32, 47, 71, 0.04) 0px -0.25rem 0.5rem -0.125rem,
    rgba(32, 47, 71, 0.03) 0px 0px 0px 0.0625rem;
  `,
  brand: `0 0.25rem 1.25rem rgba(0, 167, 150, 0.2)`,
};

export default {
  ...theme,
  themeName: "meetups",
  data,
  colors,
  fonts,
  shadows,
  gradients,
  logos,
};
