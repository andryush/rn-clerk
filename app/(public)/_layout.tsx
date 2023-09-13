import { Stack } from 'expo-router';

const PublicLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '000',
        },
        headerTintColor: 'green',
      }}>
      <Stack.Screen
        name={'login'}
        options={{
          headerTitle: 'Clerk Auth App',
        }}
      />
    </Stack>
  );
};

export default PublicLayout;
