
















///This screen is never used ,it will be used for some purpose in futur



import { View, Text} from 'react-native'
import {useState,useEffect} from 'react'
import {  useGetUser } from '../config/Database';

const ConfigScreen = () => {
  const [user,setUser]=useState(null);
    useEffect(async() => {
        setUser(await useGetUser());
    }, [])
    
  
  return (
    <View> 
      <Text>Hello I am the Config Screen</Text>
      
      <Text>{user!=null?user.firstName+"   "+user.lastName+"   "+user.email+"   id:"+user.id:"no user"}</Text>
    </View>
  )
}

export default ConfigScreen