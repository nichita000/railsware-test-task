import Theme, { ThemeColors, ThemeSizes } from "../theme/Theme.types";

/**
 * @param <T> result of mapper
 */
type ThemeMapper<T> = (theme: Theme) => T;

export const mapToThemeSizes: ThemeMapper<ThemeSizes> = theme => theme.sizes;

export const mapToThemeColors: ThemeMapper<ThemeColors> = theme => theme.colors;
