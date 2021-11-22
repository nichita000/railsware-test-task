import styled, { css } from 'styled-components';
import BoxProps from './Box.types';

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
const Box = styled.div<BoxProps>`
  ${props => props.px && css`
    padding-left: ${props.theme.sizes.spacings[props.px]}px;
    padding-right: ${props.theme.sizes.spacings[props.px]}px;
  `}

  ${props => props.py && css`
    padding-top: ${props.theme.sizes.spacings[props.py]}px;
    padding-bottom: ${props.theme.sizes.spacings[props.py]}px;
  `}

  ${props => props.pt && css`
    padding-top: ${props.theme.sizes.spacings[props.pt]}px;
  `}

  ${props => props.pr && css`
    padding-right: ${props.theme.sizes.spacings[props.pr]}px;
  `}

  ${props => props.pb && css`
    padding-bottom: ${props.theme.sizes.spacings[props.pb]}px;
  `}

  ${props => props.pl && css`
    padding-left: ${props.theme.sizes.spacings[props.pl]}px;
  `}

  ${props => props.mx && css`
    margin-left: ${props.theme.sizes.spacings[props.mx]}px;
    margin-right: ${props.theme.sizes.spacings[props.mx]}px;
  `}

  ${props => props.my && css`
    margin-top: ${props.theme.sizes.spacings[props.my]}px;
    margin-bottom: ${props.theme.sizes.spacings[props.my]}px;
  `}

  ${props => props.mt && css`
    margin-top: ${props.theme.sizes.spacings[props.mt]}px;
  `}

  ${props => props.mr && css`
    margin-right: ${props.theme.sizes.spacings[props.mr]}px;
  `}

  ${props => props.mb && css`
    margin-bottom: ${props.theme.sizes.spacings[props.mb]}px;
  `}

  ${props => props.ml && css`
    margin-left: ${props.theme.sizes.spacings[props.ml]}px;
  `}
`;

export default Box;
