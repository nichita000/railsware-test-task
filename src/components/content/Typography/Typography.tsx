import styled, { css } from 'styled-components';
import { TypographyProps } from './Typography.types';

export const Typography = styled.span<TypographyProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  line-height: 20px;

  ${props => props.heading && css`
    font-weight: bold;
    font-size: ${props => props.theme.sizes.font.lg};
    line-height: 42px;
    color: ${props => props.theme.colors.typography.headingColor};
  `}

  ${props => props.hint && css`
    color: ${props => props.theme.colors.typography.hintColor};
    line-height: ${props => props.theme.sizes.font.md};
    padding: 0 5px;
  `}

  ${props => props.link && css`
    text-decoration: none;
    color: ${props => props.theme.colors.typography.linkColor};
    line-height: ${props => props.theme.sizes.font.md};
    cursor: pointer;
  `}
`;
