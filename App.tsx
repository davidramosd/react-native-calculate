/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';

import { style } from './src/theme/appTheme';
function App(): JSX.Element {
  return (
    <SafeAreaView style={style.background}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculadoraScreen />
    </SafeAreaView>
  );
}

export default App;
