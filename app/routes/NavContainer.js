
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
            
    <Stack.Navigator
    >
        <Stack.Screen name="About" component={AboutScreen} initialParams={
          {skip:false}
          }/>
        <Stack.Screen name="Home" component={PostsScreen}
                    options={({navigation})=>( {
                      headerTitle:()=><NavigationHeader navigation={navigation}/>,
                      headerStyle: {
                       height:40,
                   
                       
                      },
                      
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                      fontWeight: 'bold',
                      },
                    })
                  }
            
            />
            <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{title:"Add a post"}}/>
            <Stack.Screen name="Config" component={ConfigScreen}  options={{title:"Setting"}}/>
            
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="ViewPost" component={ViewPostScreen}  options={{title:"Post"}
          }/>
           
    </Stack.Navigator>

        </NavigationContainer>

  )
}

export default NavContainer