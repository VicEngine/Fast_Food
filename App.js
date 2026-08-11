import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SplashScreenComponent from './src/components/SplashScreen';
import MainNavigator from './src/navigator/MainNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fontsReady, setFontsReady] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    OpenSans: require('./src/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'OpenSans-Italic': require('./src/assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
    Inter: require('./src/assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    'Inter-Italic': require('./src/assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf'),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setFontsReady(true);
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (!showSplash || fontsReady) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [showSplash, fontsReady]);

  if (showSplash || !fontsReady) {
    return <SplashScreenComponent />;
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}



