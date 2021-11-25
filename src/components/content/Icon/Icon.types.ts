import { ThemeColors } from '../../../theme/Theme.types';

type IconProps = { color?: keyof ThemeColors['icon'] };

export type IconComponent = React.FC<IconProps>;
