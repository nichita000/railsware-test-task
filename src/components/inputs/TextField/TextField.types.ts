type TextFieldProps = {
  className?: string;
  color?: string;
  prefixIcon?: React.ReactElement;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'email' | 'password';
  name?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

type TextFieldComponent = React.FC<TextFieldProps>;

export default TextFieldComponent;
