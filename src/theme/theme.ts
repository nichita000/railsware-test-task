import Theme, { ThemeColors, ThemeSizes } from './Theme.types';

const colors: ThemeColors = {
  button: {
    backgroundPrimary: '#1A4F8B',
    backgroundCardUpgrade: '#BF1541',
    backgroundFacebook: '#385C8E',
    backgroundGoogle: '#F14436',
    textColor: '#FFFFFF',
  },
  icon: {
    primary: '#1A4F8B',
    secondary: '#AEAEAE',
  },
  textField: {
    border: '#C3C3C3',
    borderPrimary: '#1A4F8B',
    color: '#6A6A6A',
    colorPrimary: '#1A4F8B',
    placeholder: '#767676',
    placeholderPrimary: '#1A4F8B',
    prefixIcon: '#C3C3C3',
    prefixIconPrimary: '#1A4F8B',
  },
  typography: {
    headingColor: '#000000',
    hintColor: '#B0B0B0',
    linkColor: '#1A4F8B',
  }
};

const sizes: ThemeSizes = {
  common: {
    fullWidth: '100%',
  },
  spacings: {
    md: '36px',
    lg: '50px',
  },
  breakpoints: {
    lg: '665px',
    md: '344px',
    sm: '165px',
  },
  font: {
    lg: '36px',
    md: '28px',
    sm: '16px',
  },
};

export const theme: Theme = { colors, sizes };
