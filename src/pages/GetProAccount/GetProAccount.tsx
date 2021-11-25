import FlexboxContainer from '../../components/layout/FlexboxContainer';
import Box from '../../components/layout/Box';
import GetProAccountIllustration from '../../assets/images/get-pro-account-illustration.svg';
import Typography from '../../components/content/Typography';
import { CardForm } from './CardForm';
import { CardDetails } from './CardForm.type';

export const GetProAccount = () => {
  const handleUpgradeSubmitted = (card: CardDetails) => console.table(card);

  return (
    <FlexboxContainer direction="column" alignItems="center">

      <Box py="lg">
        <Typography heading>Get Pro Account</Typography>
      </Box>

      <Box pb="md">
        <img src={GetProAccountIllustration} alt="Get Pro Account Illustration" />
      </Box>

      <CardForm onSubmitted={handleUpgradeSubmitted} />
    </FlexboxContainer>
  );
};
