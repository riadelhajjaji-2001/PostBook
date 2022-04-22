
import { View, Text ,Button} from 'react-native'
import {React ,useState,useEffect, useCallback} from 'react'
import { useSetUser } from '../config/Database';


const LoginScreen = ({navigation}) => {

  const [user, setUser] = useState({firstName:"hmida",lastName:"beta",email:"nonnono@gmail.com"});
  const url="https://dummyapi.io/data/v1/user/create"
    const sendPost=async (myuser) => {
       
            const myHeaders=new Headers();
            myHeaders.append("app-id","625c402dc48cf93352d6e34b");
            myHeaders.append("Accept","application/json")
            myHeaders.append("Content-Type","application/json")
            const  myInit={
                method:'POST',
                headers:myHeaders,
                body:JSON.stringify(myuser),
            }
            console.log(myInit)
            
            const res=await fetch(url,myInit);
            if(!res){
                console.log(res)
            }
            console.log(res)
            const data=await res.json();
            useSetUser(data)
            setUser(data);
    }
    const createUser=useCallback(async()=>await sendPost,[user])
  useEffect(async() => {
    await createUser();
    console.log(user)
  
  }, [])

  return (
    <View>
     
        <Button title='create user' onPress={async()=>await sendPost(user)}/>
     <Text> {user.firstName+"   "+user.lastName+"   "+user.email} </Text>
    </View>
  )
}

export default LoginScreen