import { ResponsiveSizes } from "../shared/common.types";

type Theme = {
  colors: ThemeColors;
  sizes: ThemeSizes;
};

type NamedSpacings = {
  padding?: string;
  margin?: string;
}

type NamedSizes = {
  sizes?: Omit<ResponsiveSizes<string>, 'sm'>,
  spacings?: NamedSpacings,
}

export type ThemeSizes = {
  common: {
    fullWidth: string,
  },
  spacings: Omit<ResponsiveSizes<string>, 'sm'>,
  breakpoints: ResponsiveSizes<string>,
  font: ResponsiveSizes<string>,
};

export type ThemeColors = {
  button: {
    backgroundPrimary: string,
    backgroundCardUpgrade: string,
    backgroundFacebook: string,
    backgroundGoogle: string,
    textColor: string,
  },
  icon: {
    primary: string,
    secondary: string,
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
