import React, { createContext, useContext } from 'react'
import * as Speech from 'expo-speech'

const SpeakContext = createContext({})

export const SpeakProvider = ({ children }) => {
  const speak = (text, speed = 'normal') => {
    const getSpeed = () => {
      if (speed === 'slow') return 0.5
      if (speed === 'fast') return 2.0
      return 1.0
    }

    return Speech.speak(text, {
      language: 'pt-BR',
      rate: getSpeed(),
    })
  }

  const stopSpeaking = () => Speech.stop()

  return (
    <SpeakContext.Provider value={{ speak, stopSpeaking }}>
      {children}
    </SpeakContext.Provider>
  )
}

export function useSpeachContext() {
  const { isSpeaking, speak, stopSpeaking } = useContext(SpeakContext)
  return { isSpeaking, speak, stopSpeaking }
}

export default SpeakContext
