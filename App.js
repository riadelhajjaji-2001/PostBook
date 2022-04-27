import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AboutStack from './app/routes/AboutStack';
import ConfigStack from './app/routes/ConfigStack';
import HomeStack from './app/routes/HomeStack';
import NavContainer from './app/routes/NavContainer';
import LoginScreen from './app/screens/LoginScreen';
import PostsScreen from './app/screens/PostsScreen'
import ViewPostScreen from './app/screens/ViewPostScreen';
import CreatePostScreen from './app/screens/CreatePostScreen';
import NavigationHeader from './app/components/NavigationHeader';
import AboutScreen from './app/screens/AboutScreen';
import ConfigScreen from './app/screens/ConfigScreen';
import Post from './app/components/Post';
import NavigationDrawer  from './app/routes/NavContainer';
export default function App() {
  return (
      <NavContainer/>
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
