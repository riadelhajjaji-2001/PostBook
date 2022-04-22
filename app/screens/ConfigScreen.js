import { View, Text } from 'react-native'
import {useState,useEffect} from 'react'
import {  useGetUser } from '../config/Database';

const ConfigScreen = () => {
  const [user,setUser]=useState(null);


  // const setuser=useCallback(async() => {
       
  //   },
  //   [user],
  // )

  useEffect(async() => {
   // const user=await useGetUser();
    setUser(await useGetUser())
    //console.log(user)
 
 }, [])


  
  return (
    <View>
      
      <Text>Hello I am the Config Screen</Text>
      <Text>{user!=null?user.firstName+"   "+user.lastName+"   "+user.email:"no user"}</Text>
    </View>
  )
}

export default ConfigScreen