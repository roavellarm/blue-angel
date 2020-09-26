import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Jua_400Regular, useFonts } from '@expo-google-fonts/jua'
import { ThemeProvider } from 'styled-components/native'
import { SpeakProvider } from './src/contexts/speak'
import theme from './src/theme'
import Router from './src/Router'

export default function App() {
  const [fontsLoaded] = useFonts({ Jua_400Regular })

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <SpeakProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SpeakProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  )
}
