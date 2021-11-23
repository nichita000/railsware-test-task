import Theme, { ThemeColors, ThemeSizes } from './Theme.types';

const colors: ThemeColors = {
  // TODO: Think of moving primary color to common
  button: {
    backgroundPrimary: '#1A4F8B',
    backgroundCardUpgrade: '#BF1541',
    backgroundFacebook: '#385C8E',
    backgroundGoogle: '#F14436',
    textColor: '#FFFFFF',
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
    md: 36,
    lg: 50,
  },
  container: 340,
  textField: {
    lg: 340,
    md: 165,
  },
  button: {
    lg: 340,
    md: 165,
  },
  font: {
    lg: 36,
    md: 28,
  }
};

export default { colors, sizes } as Theme;
