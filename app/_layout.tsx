import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { router, Slot, useSegments } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';

import { config } from '../gluestack-ui.config';

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
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    console.log('isSignedIn', isSignedIn);
    console.log('isLoaded', isLoaded);
    console.log('segments', segments);

    if (!isLoaded) return;

    const inProtectedRoutesGroup = segments[0] === '(protected)';

    if (isSignedIn && !inProtectedRoutesGroup) {
      router.replace('/home');
    } else if (!isSignedIn) {
      router.replace('/login');
    }
  }, [isSignedIn]);

  return <Slot />;
};
const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={CLERK_KEY} tokenCache={tokenCache}>
      <GluestackUIProvider config={config}>
        <InitialLayout />
      </GluestackUIProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
