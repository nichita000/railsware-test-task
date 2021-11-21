type Theme = {
  colors: ThemeColors;
  sizes: ThemeSizes;
}

export type ThemeSizes = {
  paddings: {
    md: number,
    lg: number,
  },
  spacings: {
    container: number,
  },
  input: {
    lg: number,
    md: number,
  },
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
