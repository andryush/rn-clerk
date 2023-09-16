import { Stack } from 'expo-router';

const PublicLayout = () => {
  return (
    <Stack>
      <Stack.Screen name={'login'} options={{ headerShown: false }} />
      <Stack.Screen
        name={'register'}
        options={{
          headerTitle: '',
          gestureEnabled: true,
          headerBackButtonMenuEnabled: true,
          headerTransparent: true,
          headerTintColor: '#00C38E',
        }}
      />
      <Stack.Screen
        name={'forgotPassword'}
        options={{
          headerTitle: 'Forgot Password',
          gestureEnabled: true,
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack>
  );
};

export default PublicLayout;
