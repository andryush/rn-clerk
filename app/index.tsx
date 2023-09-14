import { Button, ButtonText } from '@gluestack-ui/themed';
import { Text } from 'react-native';

const Main = () => {
  return (
    <>
      <Text>Hi There!</Text>
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}>
        <ButtonText>Add</ButtonText>
      </Button>
    </>
  );
};

export default Main;
