import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import Colors from './constants/colors.js';
import BaseScreen from  './screens/BaseScreen.js';
import EventsScreen from './screens/EventsScreen.js';

export default function App() {
  const [fontsLoaded] = useFonts({
    "squealer": require("./assets/fonts/Squealer.otf"),
    "squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf")
  })

  const [currentScreen, setCurrentScreen] = useState("base")

  function eventScreenHandler() {
    setCurrentScreen("event");
  }

  function baseScreenHandler() {
    setCurrentScreen("base");
  }

  let screen = <BaseScreen onNext={eventScreenHandler}/>;

  if (currentScreen == "event"){
    screen = <EventsScreen onNext={baseScreenHandler}/>;
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
