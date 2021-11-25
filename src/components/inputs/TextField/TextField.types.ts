import { ThemeSizes } from '../../../theme/Theme.types';
import { textFieldMasks } from '../../../shared/text-field-masks';
import { ValueOf } from '../../../shared/common.types';

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
  mask?: string;
  maskPlaceholder?: null;
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
  mask?: ValueOf<typeof textFieldMasks>;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TextFieldComponent = React.FC<
  TextFieldProps &
  React.DOMAttributes<HTMLInputElement>>;
