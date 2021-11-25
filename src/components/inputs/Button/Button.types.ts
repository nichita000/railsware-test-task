import { ThemeColors, ThemeSizes } from '../../../theme/Theme.types';

export type ButtonProps = {
  size?: keyof ThemeSizes['breakpoints'];
  backgoundColor?: ThemeColors['button'];
  textColor?: ThemeColors['button'];
};
