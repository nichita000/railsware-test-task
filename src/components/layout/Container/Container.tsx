import styled from 'styled-components';

export const Container = styled.div`
  padding-top: ${props => props.theme.sizes.spacings.md};
  padding-bottom: ${props => props.theme.sizes.spacings.lg};
  width: ${props => props.theme.sizes.breakpoints.md};
  height: ${props => props.theme.sizes.breakpoints.lg};
  margin: 0 auto;
`;
