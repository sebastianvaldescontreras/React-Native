import React from 'react'
import { SafeAreaView } from 'react-native'
import { DimensionsScreen } from './src/screens/DimensionsScreen'
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { CounterScreen } from './src/screens/CounterScreen';

export const App = () => {
  return (
    // <HolaMundoScreen/>
    // <CounterScreen/>
    // <BoxObjectModelScreen/>
    <SafeAreaView style={{flex: 1, height: 300, width: 400}}>
        <DimensionsScreen/>
    </SafeAreaView>
  )
}
