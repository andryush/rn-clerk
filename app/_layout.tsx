import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { config, GluestackUIProvider } from '@gluestack-ui/themed';
import { Slot } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from 'react-native';

const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || '';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {}
  },
};

const InitialLayout = () => {
  return <Slot />;
};
const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={CLERK_KEY} tokenCache={tokenCache}>
      <GluestackUIProvider config={config.theme}>
        <SafeAreaView>
          <InitialLayout />
        </SafeAreaView>
      </GluestackUIProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
