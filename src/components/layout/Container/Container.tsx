import styled from 'styled-components';
import { mapToThemeSizes } from '../../../shared/theme-mappers';

export const Container = styled.div`
  padding-top: ${props => mapToThemeSizes(props.theme).spacings.md}px;
  width: ${props => mapToThemeSizes(props.theme).container}px;
  // TODO: theme
  height: 840px;
  margin: 0 auto;
`;
