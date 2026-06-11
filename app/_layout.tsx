import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '@/constants/theme';
import { useFonts } from 'expo-font';
import {
  CormorantGaramond_500Medium_Italic,
  CormorantGaramond_600SemiBold,
  CormorantGaramond_700Bold,
} from '@expo-google-fonts/cormorant-garamond';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { AppProvider } from '@/context/AppContext';
import { LanguageProvider, hasSelectedLanguage } from '@/context/LanguageContext';
import { router } from 'expo-router';

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const [langChecked, setLangChecked] = useState(false);

  useEffect(() => {
    hasSelectedLanguage().then((selected) => {
      if (!selected) {
        router.replace('/language-select');
      }
      setLangChecked(true);
    });
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="language-select"
        options={{
          animation: 'fade',
          contentStyle: { backgroundColor: COLORS.bgDeep },
        }}
      />
      <Stack.Screen name="dhikr/[id]" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="program/[id]" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="settings" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="counter/[id]" options={{ animation: 'slide_from_bottom', presentation: 'modal' }} />
      <Stack.Screen
        name="tasbih/[id]"
        options={{
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: '#0F2318' },
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    CormorantGaramond_500Medium_Italic,
    CormorantGaramond_600SemiBold,
    CormorantGaramond_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.bgDeep, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.gold} />
      </View>
    );
  }

  return (
    <LanguageProvider>
      <AppProvider>
        <RootLayoutNav />
        <StatusBar style="dark" />
      </AppProvider>
    </LanguageProvider>
  );
}
