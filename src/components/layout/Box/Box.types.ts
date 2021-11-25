import { ThemeSizes } from '../../../theme/Theme.types';

type Paddings = 'px' | 'py' | 'pt' | 'pr' | 'pb' | 'pl';
type Margins = 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml';

export type BoxProps = {
  [K in Paddings | Margins]?: keyof ThemeSizes['spacings'];
};
