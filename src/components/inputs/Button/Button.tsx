import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  width: ${props => props.size ?
    props.theme.sizes.breakpoints[props.size] :
    props.theme.sizes.breakpoints.md
  };
  font-size: ${props => props.theme.sizes.font.sm};
  background-color: ${props =>
    props.color ??
    props.theme.colors.button.backgroundPrimary
  };
  color: ${props =>
    props.textColor ??
    props.theme.colors.button.textColor
  };
  border-radius: 8px;
  padding: 15px 0px;
  border: none;
  cursor: pointer;
  transition: opacity .1s ease-out;

  &:hover {
    opacity: .8;
  }

  ${props => props.size && props.size === 'sm' && css`
    padding: 10px 0px;
  `}
`;
