import styled, { css } from 'styled-components';
import { mapToThemeColors, mapToThemeSizes } from '../../../shared/theme-mappers';
import TypographyProps from './Typography.types';

export const Typography = styled.span<TypographyProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: normal;

  ${props => props.heading && css`
    font-weight: bold;
    font-size: ${props => mapToThemeSizes(props.theme).font.lg}px;
    line-height: 42px;
    color: ${props => mapToThemeColors(props.theme).typography.headingColor};
  `}

  ${props => props.hint && css`
    color: ${props => mapToThemeColors(props.theme).typography.hintColor};
    line-height: ${props => mapToThemeSizes(props.theme).font.md}px;
    // TODO: ???
    padding: 0 5px;
  `}

  ${props => props.link && css`
    text-decoration: none;
    color: ${props => mapToThemeColors(props.theme).typography.linkColor};
    line-height: ${props => mapToThemeSizes(props.theme).font.md}px;
    cursor: pointer;
  `}
`;
