export type CardValues = {
  cardNumber: string,
  expiryDate: string,
  cvv: string,
  postalCode: string,
}

type CardFormProps = {
  onSubmitted: (card: CardValues) => void;
}

export type CardFormComponent = React.FC<CardFormProps>;
