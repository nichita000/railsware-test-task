import { ThemeSizes } from "../../../theme/Theme.types";

type Paddings = 'px' | 'py' | 'pt' | 'pr' | 'pb' | 'pl';
type Margins = 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml';

type BoxProps = {
  [K in Paddings | Margins]?: keyof ThemeSizes['spacings'];
};

export default BoxProps;