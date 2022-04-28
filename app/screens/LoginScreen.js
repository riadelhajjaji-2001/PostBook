
import { View, Text,TextInput,StyleSheet,Button } from 'react-native'
import {React ,useState,useEffect, useCallback} from 'react'
import { useSetUser } from '../config/Database';
import getCircularReplacer from '../hooks/ScyclicStruc'
const LoginScreen = ({navigation}) => {

  const [user, setUser] = useState(null);
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const url="https://dummyapi.io/data/v1/user/create"
    const sendUser=async (myuser) => {
            if(myuser.firstName===""||myuser.lastName===""||myuser.email===""){
              return 
            }
            const myHeaders=new Headers();
            myHeaders.append("app-id","625c402dc48cf93352d6e34b");
            myHeaders.append("Accept","application/json")
            myHeaders.append("Content-Type","application/json")
            const  myInit={
                method:'POST',
                headers:myHeaders,
                body:JSON.stringify(myuser,getCircularReplacer()),
            }
            console.log(myInit)
            
            const res=await fetch(url,myInit);
            if(!res.ok){
                console.log(res)
            }
            console.log(res)
            const data=await res.json();
            await useSetUser(data)
            setUser(data);
    }
    //const createUser=useCallback(async()=>await sendUser(user),[user])
 
  useEffect(() => {
     setUser({firstName:firstname,lastName:lastname,email:email})
  
  }, [firstname,lastname,email])
 
  return (
    <View>
          <TextInput style={styles.input} placeholder='first name' onChangeText={(text)=>{setFirstname(text)}}/> 
          <TextInput style={styles.input} placeholder='last name' onChangeText={(text)=>{setLastname(text)}}/> 
          <TextInput style={styles.input} placeholder='email' onChangeText={(text)=>{setEmail(text)}}/> 
          <Button title="Register" onPress={()=> 
            sendUser(user)
           }/>
        
          <Text> {user!=null?(user.firstName+"   "+user.lastName+"   "+user.email):""} </Text>
          <Button title="Return to Home" onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}
const styles = StyleSheet.create({
  input:{
      padding:12,
      margin:12
  }
})
export default LoginScreen