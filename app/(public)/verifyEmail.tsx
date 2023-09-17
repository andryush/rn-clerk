import {
  Box,
  Button,
  ButtonText,
  HStack,
  Image,
  Input,
  InputField,
  Text,
} from '@gluestack-ui/themed';

import BlurredContainer from '../components/BlurredContainer';

const VerifyEmail = () => {
  return (
    <Box width={'100%'} height={'100%'} bgColor={'$black'}>
      <Image
        position={'absolute'}
        source={require('../../assets/images/bg-verify.jpg')}
        size={'full'}
      />
      <BlurredContainer
        header={'Verification'}
        blurIntensity={80}
        boxHeight={'55%'}>
        <Input variant="outline" size="xl" bgColor={'$white'}>
          <InputField type={'text'} placeholder={'Verification code'} />
        </Input>
        <Button size="xl" variant="solid" action="primary">
          <ButtonText>Verify</ButtonText>
        </Button>
        <HStack alignItems={'center'} gap={6}>
          <Text color={'$white'} size="md">
            Not received verification code?
          </Text>
          <Button size="md" variant="link" action="primary" onPress={() => {}}>
            <ButtonText>Resend</ButtonText>
          </Button>
        </HStack>
      </BlurredContainer>
    </Box>
  );
};

export default VerifyEmail;
