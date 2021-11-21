import styled from 'styled-components';
import { mapToThemeSizes } from '../../shared/theme-mappers';

const Container = styled.div`
  width: ${props => mapToThemeSizes(props.theme).spacings.container};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default Container;
