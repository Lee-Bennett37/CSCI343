import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import Colors from './constants/colors.js';
import BaseScreen from  './screens/BaseScreen.js';
import MenuScreen from './screens/MenuScreen.js';

export default function App() {
  const [fontsLoaded] = useFonts({
    "squealer": require("./assets/fonts/Squealer.otf"),
    "squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf")
  })

  const [currentScreen, setCurrentScreen] = useState("base")

  function menuScreenHandler() {
    setCurrentScreen("event");
  }

  function baseScreenHandler() {
    setCurrentScreen("base");
  }

  let screen = <BaseScreen onNext={menuScreenHandler}/>;

  if (currentScreen == "event"){
    screen = <MenuScreen onNext={baseScreenHandler}/>;
  }

  return (
    <>
    <StatusBar style='light' />
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>

    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
