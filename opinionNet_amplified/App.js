/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StatusBar, StyleSheet, View } from 'react-native';
 import ProtoType from './screens/ProtoType';
 import LoginScreen from './screens/LoginScreen';
 import HomeScreen from './screens/HomeScreen';
 import SettingScreen from './screens/SettingScreen';
 
 export default function App() {
   return (
     <View style={styles.container}>
       <StatusBar />
       <HomeScreen/>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: '#fff',
     flex: 1,
   },
 });
