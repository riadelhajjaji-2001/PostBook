import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AboutStack from './app/routes/AboutStack';
import ConfigStack from './app/routes/ConfigStack';
import HomeStack from './app/routes/HomeStack';
import PostsScreen from './app/screens/PostsScreen'
import ViewPostScreen from './app/screens/ViewPostScreen';
export default function App() {
  return (
      <ConfigStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
