import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginAdmin from './src/component/user/LoginAdmin';
import Register from './src/component/user/Register';

function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <LoginAdmin/> */}
      <Register/>
    </SafeAreaView>
  );
}

export default App;
