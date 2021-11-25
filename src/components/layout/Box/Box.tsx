import styled, { css } from 'styled-components';
import { BoxProps } from './Box.types';

/**
 * Box component is built in order to unify the usage of
 * paddings and margins around the application.
 *
 * @example
 * jsx``
 *  <Box px="md"> ... </Box> // Div with left/right padding equal to `md` size
 *  <Box mx="md"> ... </Box> // Div with left/right margin equal to `md` size
 * ``
 */
export const Box = styled.div<BoxProps>`
  ${props => props.px && css`
    padding-left: ${props.theme.sizes.spacings[props.px]};
    padding-right: ${props.theme.sizes.spacings[props.px]};
  `}

  ${props => props.py && css`
    padding-top: ${props.theme.sizes.spacings[props.py]};
    padding-bottom: ${props.theme.sizes.spacings[props.py]};
  `}

  ${props => props.pt && css`
    padding-top: ${props.theme.sizes.spacings[props.pt]};
  `}

  ${props => props.pr && css`
    padding-right: ${props.theme.sizes.spacings[props.pr]};
  `}

  ${props => props.pb && css`
    padding-bottom: ${props.theme.sizes.spacings[props.pb]};
  `}

  ${props => props.pl && css`
    padding-left: ${props.theme.sizes.spacings[props.pl]};
  `}

  ${props => props.mx && css`
    margin-left: ${props.theme.sizes.spacings[props.mx]};
    margin-right: ${props.theme.sizes.spacings[props.mx]};
  `}

  ${props => props.my && css`
    margin-top: ${props.theme.sizes.spacings[props.my]};
    margin-bottom: ${props.theme.sizes.spacings[props.my]};
  `}

  ${props => props.mt && css`
    margin-top: ${props.theme.sizes.spacings[props.mt]};
  `}

  ${props => props.mr && css`
    margin-right: ${props.theme.sizes.spacings[props.mr]};
  `}

  ${props => props.mb && css`
    margin-bottom: ${props.theme.sizes.spacings[props.mb]};
  `}

  ${props => props.ml && css`
    margin-left: ${props.theme.sizes.spacings[props.ml]};
  `}
`;
