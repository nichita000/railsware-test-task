import React, { useState } from "react";
import styled from "styled-components";
import { mapToThemeColors, mapToThemeSizes } from "../../../shared/theme-mappers";
import TextFieldComponent from "./TextField.types";

const TextField: TextFieldComponent = ({
  className,
  placeholder,
  value: valueProp,
  type,
  name,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState<string>(valueProp ?? '');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  }

  return (
    <StyledTextFieldContainer>
      <StyledTextField
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleOnChange}
      />
    </StyledTextFieldContainer>
  )
}

const StyledTextFieldContainer = styled.div`
  width: ${props => mapToThemeSizes(props.theme).container}px;
  position: relative;
`;

const StyledTextField = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${props => mapToThemeColors(props.theme).inputs.border};
  padding: 12px 12px;
  box-sizing: border-box;
  font-size: 16px;
  color: ${props => mapToThemeColors(props.theme).inputs.color};
  outline: none;
  &:focus {
    border-color: ${props => mapToThemeColors(props.theme).inputs.borderFocus};
    color: ${props => mapToThemeColors(props.theme).inputs.colorFocus};
    &::placeholder {
      color: ${props => mapToThemeColors(props.theme).inputs.placeholderFocus};
    }
  }
  &::placeholder {
    color: ${props => mapToThemeColors(props.theme).inputs.placeholder};
    opacity: .7;
  }
`;

export default TextField;
