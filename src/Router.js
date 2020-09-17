import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import * as Page from './pages'

const { Navigator, Screen } = createStackNavigator()

export default function Router() {
  return (
    <Navigator headerMode="none" initialRouteName="LetterListen">
      <Screen name="Home" component={Page.Home} />
      <Screen name="Letter" component={Page.Letter} />
      <Screen name="LettersOptions" component={Page.LettersOptions} />
      <Screen name="LetterSound" component={Page.LetterSound} />
      <Screen name="LetterListen" component={Page.LetterListen} />
    </Navigator>
  )
}
