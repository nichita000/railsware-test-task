import { ResponsiveProps } from "../shared/common.types";

type Theme = {
  colors: ThemeColors;
  sizes: ThemeSizes;
}

export type ThemeSizes = {
  spacings: Required<Omit<ResponsiveProps<number>, 'sm'>>,
  container: number,
  input: Required<Omit<ResponsiveProps<number>, 'sm'>>,
  font: Required<Omit<ResponsiveProps<number>, 'sm'>>
}

export type ThemeColors = {
  inputs: {
    border: string,
    borderFocus: string,
    color: string,
    colorFocus: string,
    placeholder: string,
    placeholderFocus: string,
    prefixIcon: string,
    prefixIconFocus: string,
  },
  buttons: {
    color: string,
    backgroundBlue: string,
    backgroundRed: string,
    backgroundBurgary: string,
  },
  typography: {
    headingColor: string,
    hintColor: string,
    linkColor: string,
  }
};

export default Theme;
