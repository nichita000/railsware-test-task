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
  prefixIcon: PrefixIcon,
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
    <FormField>
      {PrefixIcon && (
        <IconPrefixContainer>
          {PrefixIcon}
        </IconPrefixContainer>
      )}

      <StyledTextField
        className={className}
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        hasPrefixIcon={Boolean(PrefixIcon)}
        fieldSize={fieldSize}
        primary={primary}
        onChange={handleChange}
      />
    </FormField>
  );
}

const FormField = styled.div`
  position: relative;
`;

const IconPrefixContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`

const StyledTextField = styled.input<StyledTextFieldProps>`
  width: ${props => props.fieldSize ?
    props.theme.sizes.breakpoints[props.fieldSize] :
    props.theme.sizes.breakpoints.md
  };
  border-radius: 5px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.textField.border};
  padding: 17px 18px;
  box-sizing: border-box;
  font-size: ${props => props.theme.sizes.font.sm};
  color: ${props => props.theme.colors.textField.textColor};
  outline: none;

  &::placeholder {
    color: ${props => props.theme.colors.textField.placeholder};
  }

  ${props => props.hasPrefixIcon && css`
    padding-left: 46px;
  `}

  ${props => props.primary && css`
    border-color: ${props => props.theme.colors.textField.borderPrimary};
    color: ${props => props.theme.colors.textField.colorPrimary};

    &::placeholder {
      color: ${props => props.theme.colors.textField.colorPrimary};
    }
  `}
`;
