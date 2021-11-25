export type CardDetails = {
  cardNumber: string,
  expiryDate: string,
  cvv: string,
  postalCode: string,
}

type CardFormProps = {
  onSubmitted: (card: CardDetails) => void;
}

export type CardFormComponent = React.FC<CardFormProps>;
