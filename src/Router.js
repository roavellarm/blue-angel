import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import * as Page from './pages'

const { Navigator, Screen } = createStackNavigator()

export default function Router() {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={Page.Home} />
      <Screen name="Alphabet-Page1" component={Page.Alphabet.Page1} />
      <Screen name="Alphabet-Page2" component={Page.Alphabet.Page2} />
      <Screen name="Alphabet-Page3" component={Page.Alphabet.Page3} />
      <Screen name="Alphabet-Page4" component={Page.Alphabet.Page4} />
    </Navigator>
  )
}
