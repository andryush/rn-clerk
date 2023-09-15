import { Stack } from 'expo-router';

const PublicLayout = () => {
  return (
    <Stack>
      <Stack.Screen name={'login'} options={{ headerShown: false }} />
    </Stack>
  );
};

export default PublicLayout;
