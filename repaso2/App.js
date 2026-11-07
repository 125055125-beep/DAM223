import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './Screen/SplashScreen';
import LibrosScreen from './Screen/LibrosScreen';

export default function App() {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      {showSplash ? <SplashScreen /> : <LibrosScreen />}
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}