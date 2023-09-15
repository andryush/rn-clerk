import {
  Box,
  Button,
  ButtonText,
  Heading,
  HStack,
  Image,
  Input,
  InputField,
  Text,
} from '@gluestack-ui/themed';
import { BlurView } from 'expo-blur';

const Login = () => {
  return (
    <Box width={'100%'} height={'100%'} bgColor={'$black'}>
      <Image
        position={'absolute'}
        source={require('../../assets/images/bg.jpg')}
        size={'full'}
      />
      <Box paddingLeft={20} paddingRight={20}>
        <Box height={'$1/2'} />
        <BlurView
          intensity={80}
          tint={'dark'}
          style={{ overflow: 'hidden', borderRadius: 14 }}>
          <Box width={'100%'} maxHeight={'$1/2'} rounded={'$xl'} padding={16}>
            <Heading size={'xl'} color={'$white'} marginBottom={16}>
              Sign In
            </Heading>
            <Box gap={14}>
              <Input variant="outline" size="xl" bgColor={'$white'}>
                <InputField type={'text'} placeholder={'Email'} />
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
                  <Button size="md" variant="link" action="primary">
                    <ButtonText>Sign Up</ButtonText>
                  </Button>
                </HStack>
                <HStack>
                  <Button size="md" variant="link" action="primary">
                    <ButtonText>Forgot your password?</ButtonText>
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>
        </BlurView>
      </Box>
    </Box>
  );
};

export default Login;
