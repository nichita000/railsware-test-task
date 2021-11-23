import { ResponsiveSizes } from "../shared/common.types";

type Theme = {
  colors: ThemeColors;
  sizes: ThemeSizes;
};

export type ThemeSizes = {
  common: {
    fullWidth: string,
  },
  spacings: Omit<ResponsiveSizes<number>, 'sm'>,
  container: number,
  textField: Omit<ResponsiveSizes<number>, 'sm'>,
  button: Omit<ResponsiveSizes<number>, 'sm'>,
  font: Omit<ResponsiveSizes<number>, 'sm'>,
};

export type ThemeColors = {
  button: {
    backgroundPrimary: string,
    backgroundCardUpgrade: string,
    backgroundFacebook: string,
    backgroundGoogle: string,
    textColor: string,
  },
  textField: {
    border: string,
    borderPrimary: string,
    color: string,
    colorPrimary: string,
    placeholder: string,
    placeholderPrimary: string,
    prefixIcon: string,
    prefixIconPrimary: string,
  },
  typography: {
    headingColor: string,
    hintColor: string,
    linkColor: string,
  },
};

export default Theme;
