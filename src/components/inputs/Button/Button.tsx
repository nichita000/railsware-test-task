import styled from 'styled-components';
import ButtonProps from './Button.types';

export const Button = styled.button<ButtonProps>`
  width: ${props => props.size ?
    props.theme.sizes.button[props.size] :
    props.theme.sizes.button.lg
  }px;
  // TODO: use theme
  height: 50px;
  font-size: 16px;
  background-color: ${props =>
    props.color ??
    props.theme.colors.button.backgroundPrimary
  };
  color: ${props =>
    props.textColor ??
    props.theme.colors.button.textColor
  };
  // TODO: use theme
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
