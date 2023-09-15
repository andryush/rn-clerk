import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '000',
        },
        headerTintColor: 'green',
      }}>
      <Stack.Screen
        name={'home'}
        options={{
          headerTitle: 'Clerk Auth App',
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
