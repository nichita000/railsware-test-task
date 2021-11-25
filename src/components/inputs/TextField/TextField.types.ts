import { ThemeSizes } from "../../../theme/Theme.types";

export type StyledTextFieldProps = {
  fieldSize?: keyof ThemeSizes['breakpoints'];
  hasPrefixIcon?: boolean;
  primary?: boolean;
};

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

type TextFieldComponent = React.FC<TextFieldProps>;

export default TextFieldComponent;
