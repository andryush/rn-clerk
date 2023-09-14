import {Button, ButtonText, Divider, Input, InputField} from '@gluestack-ui/themed';
import { Text } from 'react-native';

const Main = () => {
  return (
    <>
      <Text>Hi There!</Text>
      <Divider my="$0.5" />

      <Button
        size="xl"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}>
        <ButtonText>Add</ButtonText>
      </Button>
      <Divider my="$0.5" />

      <Input
        variant="outline"
        size="xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputField placeholder="Enter Text here" />
      </Input>
    </>
  );
};

export default Main;
