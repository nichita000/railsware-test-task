import Theme, { ThemeColors, ThemeSizes } from './Theme.types';

const colors: ThemeColors = {
  inputs: {
    border: '#C3C3C3',
    borderFocus: '#1A4F8B',
    color: '#6A6A6A',
    colorFocus: '#1A4F8B',
    placeholder: '#767676',
    placeholderFocus: '#1A4F8B',
    prefixIcon: '#C3C3C3',
    prefixIconFocus: '#1A4F8B',
  },
  buttons: {
    color: '#FFFFFF',
    backgroundBlue: '#1A4F8B',
    backgroundRed: '#F14436',
    backgroundBurgary: '#BF1541',
  },
  typography: {
    headingColor: '#000000',
    hintColor: '#B0B0B0',
    linkColor: '#1A4F8B',
  }
};

const sizes: ThemeSizes = {
  paddings: {
    md: 36,
    lg: 50,
  },
  spacings: {
    container: 340,
  },
  input: {
    lg: 340,
    md: 165,
  },
  font: {
    lg: 36,
    md: 28,
  }
};

export default { colors, sizes } as Theme;
