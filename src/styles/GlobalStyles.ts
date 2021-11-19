import { createGlobalStyle } from 'styled-components';
import Fonts from './Fonts';
import ResetCSS from './ResetCSS';

export default createGlobalStyle`
  ${Fonts}
  ${ResetCSS}
`;
