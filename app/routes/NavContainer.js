
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsScreen from '../screens/PostsScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import ConfigScreen from '../screens/ConfigScreen';
import AboutScreen from '../screens/AboutScreen';
import LoginScreen from '../screens/LoginScreen';
import ViewPostScreen from '../screens/ViewPostScreen';
import { HeaderTitle } from 'react-navigation-stack';
import NavigationHeader from '../components/NavigationHeader';
const Stack=createNativeStackNavigator()
const NavContainer = () => {
  return (
        <NavigationContainer>
            
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >

            <Stack.Screen name="Home" component={PostsScreen}
            
            options={{
                title:<NavigationHeader title="Posts"/>,
                headerStyle: {
                  backgroundColor: '#fff',
                  
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }
                
            }
            
            />
            <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
            <Stack.Screen name="Config" component={ConfigScreen}/>
            <Stack.Screen name="About" component={AboutScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="ViewPost" component={ViewPostScreen}/>
           
    </Stack.Navigator>

        </NavigationContainer>

  )
}

export default NavContainer