import React, { useState } from "react";
import styled, { css } from "styled-components";
import TextFieldComponent, { StyledTextFieldProps } from "./TextField.types";

export const TextField: TextFieldComponent = ({
  className,
  placeholder,
  value: valueProp,
  type = 'text',
  name = '',
  fieldSize,
  primary,
  onChange
}) => {
  const [value, setValue] = useState<string>(valueProp ?? '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  }

  return (
    <StyledTextField
      className={className}
      placeholder={placeholder}
      value={value}
      type={type}
      name={name}
      fieldSize={fieldSize}
      primary={primary}
      onChange={handleChange}
    />
  );
}

const StyledTextField = styled.input<StyledTextFieldProps>`
  width: ${props => props.fieldSize ?
    props.theme.sizes.textField[props.fieldSize] :
    props.theme.sizes.textField.lg
  }px;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.textField.border};
  padding: 15px 18px;
  box-sizing: border-box;
  font-size: 16px; // TODO: theme
  color: ${props => props.theme.colors.textField.textColor};
  outline: none;

  &::placeholder {
    color: ${props => props.theme.colors.textField.placeholder};
  }

  ${props => props.primary && css`
    border-color: ${props => props.theme.colors.textField.borderPrimary};
    color: ${props => props.theme.colors.textField.colorPrimary};

    &::placeholder {
      color: ${props => props.theme.colors.textField.colorPrimary};
    }
  `}
`;
