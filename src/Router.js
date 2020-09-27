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
      <Screen name="Alphabet-Page5" component={Page.Alphabet.Page5} />
      <Screen name="Alphabet-Page6" component={Page.Alphabet.Page6} />
      <Screen name="Alphabet-Page7" component={Page.Alphabet.Page7} />
    </Navigator>
  )
}
