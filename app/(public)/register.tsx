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
import { router } from 'expo-router';

import BlurredContainer from '../components/BlurredContainer';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Register = () => {
  return (
    <KeyboardAvoidingWrapper>
      <Box width={'100%'} height={'100%'} bgColor={'$black'}>
        <Image
          position={'absolute'}
          source={require('../../assets/images/bg-signup.jpg')}
          size={'full'}
        />
        <BlurredContainer
          header={'Sign Up'}
          blurIntensity={80}
          marginTop={'32%'}>
          <Input variant="outline" size="xl" bgColor={'$white'}>
            <InputField type={'text'} placeholder={'Email'} />
          </Input>
          <Input variant="outline" size="xl" bgColor={'$white'}>
            <InputField type={'password'} placeholder={'Password'} />
          </Input>
          <Input variant="outline" size="xl" bgColor={'$white'}>
            <InputField type={'password'} placeholder={'Repeat password'} />
          </Input>
          <Button
            size="xl"
            variant="solid"
            action="primary"
            onPress={() => router.push('/verifyEmail')}>
            <ButtonText>Sign Up</ButtonText>
          </Button>
          <HStack alignItems={'center'} gap={6}>
            <Text color={'$white'} size="md">
              Already have an account?
            </Text>
            <Button
              size="md"
              variant="link"
              action="primary"
              onPress={() => router.push('/login')}>
              <ButtonText>Sign In</ButtonText>
            </Button>
          </HStack>
        </BlurredContainer>
      </Box>
    </KeyboardAvoidingWrapper>
  );
};

export default Register;
