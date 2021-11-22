import styled from 'styled-components';
import { mapToThemeSizes } from '../../../shared/theme-mappers';

const Container = styled.div`
  padding-top: ${props => mapToThemeSizes(props.theme).spacings.md}px;
  width: ${props => mapToThemeSizes(props.theme).container}px;
  margin: 0 auto;
`;

export default Container;
