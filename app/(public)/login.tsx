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

const Login = () => {
  return (
    <KeyboardAvoidingWrapper>
      <Box width={'100%'} height={'100%'} bgColor={'$black'}>
        <Image
          position={'absolute'}
          source={require('../../assets/images/bg.jpg')}
          size={'full'}
          alt={'signin-background'}
        />
        <BlurredContainer header={'Sign In'} marginTop={'45%'}>
          <Input variant="outline" size="xl" bgColor={'$white'}>
            <InputField
              type={'text'}
              placeholder={'Email'}
              autoCapitalize={'none'}
            />
          </Input>
          <Input variant="outline" size="xl" bgColor={'$white'}>
            <InputField type={'password'} placeholder={'Password'} />
          </Input>
          <Button size="xl" variant="solid" action="primary">
            <ButtonText>Sign In</ButtonText>
          </Button>
          <Box>
            <HStack alignItems={'center'} gap={6}>
              <Text color={'$white'} size="md">
                Don't have an account?
              </Text>
              <Button
                size="md"
                variant="link"
                action="primary"
                onPress={() => router.push('/register')}>
                <ButtonText>Sign Up</ButtonText>
              </Button>
            </HStack>
            <HStack>
              <Button
                size="md"
                variant="link"
                action="primary"
                onPress={() => router.push('/forgotPassword')}>
                <ButtonText>Forgot your password?</ButtonText>
              </Button>
            </HStack>
          </Box>
        </BlurredContainer>
      </Box>
    </KeyboardAvoidingWrapper>
  );
};

export default Login;
