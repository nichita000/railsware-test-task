import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconComponent } from '../Icon.types';
import Theme from '../../../../theme/Theme.types';

export const Contact: IconComponent = ({
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
          d="M12.571 3.625c-3.02 0-5.484 2.457-5.484 5.469 0 1.87.955 3.53 2.4 4.516a7.807 7.807 0 00-4.75 7.203h1.566c0-3.489 2.77-6.25 6.268-6.25 3.499 0 6.269 2.761 6.269 6.25h1.567a7.807 7.807 0 00-4.75-7.203 5.472 5.472 0 002.4-4.516c0-3.012-2.465-5.469-5.486-5.469zm0 1.563a3.9 3.9 0 013.918 3.906A3.9 3.9 0 0112.571 13a3.9 3.9 0 01-3.917-3.906 3.9 3.9 0 013.917-3.906z"
          fill={iconColor}
        />
      </g>
    </svg>
  );
}