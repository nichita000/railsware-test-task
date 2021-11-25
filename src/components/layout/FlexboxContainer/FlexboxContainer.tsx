import styled from 'styled-components';
import FlexboxContainerProps from './FlexboxContainer.types';

export const FlexboxContainer = styled.div<FlexboxContainerProps>`
  width: ${props => props.theme.sizes.common.fullWidth};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

FlexboxContainer.defaultProps = {
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};
