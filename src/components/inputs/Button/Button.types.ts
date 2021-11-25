import { ThemeColors, ThemeSizes } from "../../../theme/Theme.types";

type ButtonProps = {
  size?: keyof ThemeSizes['breakpoints'];
  backgoundColor?: ThemeColors['button'];
  textColor?: ThemeColors['button'];
}

export default ButtonProps;
