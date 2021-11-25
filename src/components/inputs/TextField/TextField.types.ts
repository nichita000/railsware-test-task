import React from "react";
import { ThemeSizes } from "../../../theme/Theme.types";

export enum SupportedTextFieldTypes {
  Text = 'text',
  Email = 'email',
  Password = 'password',
};

export enum SupportedAutocompleteOptions {
  On = 'on',
  Off = 'off',
  CurrentPassword = 'current-password',
};

export type StyledTextFieldProps = {
  fieldSize?: keyof ThemeSizes['breakpoints'];
  hasPrefixIcon?: boolean;
  primary?: boolean;
} & React.DOMAttributes<HTMLInputElement>;


type TextFieldProps = {
  className?: string;
  color?: string;
  prefixIcon?: React.ReactElement;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'email' | 'password';
  name?: string;
  fieldSize?: keyof ThemeSizes['breakpoints'];
  primary?: boolean;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TextFieldComponent = React.FC<TextFieldProps & React.DOMAttributes<HTMLInputElement>>;
