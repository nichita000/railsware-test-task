import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconComponent } from '../Icon.types';
import Theme from '../../../../theme/Theme.types';

export const Lock: IconComponent = ({
  color,
}) => {
  const theme = useContext<Theme>(ThemeContext);
  const themeIconColors = theme.colors.icon;

  const iconColor = color ? themeIconColors[color] : themeIconColors.primary;

  return (
    <svg
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="prefix__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={26}
        height={26}
      >
        <path fill="#fff" d="M.035.5h25.073v25H.035z" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.571 2.844c-3.011 0-5.484 2.466-5.484 5.469v2.343h-2.35v12.5h15.67v-12.5h-2.35V8.312c0-3.002-2.474-5.468-5.486-5.468zm0 1.562c2.158 0 3.918 1.755 3.918 3.907v2.343H8.654V8.312c0-2.151 1.76-3.906 3.917-3.906zM6.303 12.22H18.84v9.375H6.303v-9.375z"
          fill={iconColor}
        />
      </g>
    </svg>
  )
};