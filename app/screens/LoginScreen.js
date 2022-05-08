
import { View, Text,TextInput,StyleSheet,Button } from 'react-native'
import {React ,useState,useEffect} from 'react'
import { useSetUser } from '../config/Database';

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
                body:JSON.stringify(myuser),
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
            navigation.navigate("About",{skip:true})
    }

 
  useEffect(() => {
     setUser({firstName:firstname,lastName:lastname,email:email})
  
  }, [firstname,lastname,email])
 
  return (
    <View style={styles.container}>
         <View style={styles.inputs}>
            <TextInput style={styles.input} placeholder='First name' onChangeText={(text)=>{setFirstname(text)}}/> 
            <TextInput style={styles.input} placeholder='Last name' onChangeText={(text)=>{setLastname(text)}}/> 
            <TextInput style={styles.input} placeholder='Email' onChangeText={(text)=>{setEmail(text)}}/> 
            <View style={styles.register}><Button title="Register" onPress={async()=>{
              await sendUser(user)
            }}/></View>
         </View>
           
               
                      <Button onPress={()=>navigation.navigate("About",{skip:true})} title='Return to Posts' />
              
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  input:{

    padding:15,
    margin:12,
    borderWidth:1
} ,
  home:{
     
     
      fontSize:25,
      fontWeight:'bold',
      alignItems:'center',
      color:"#fff",
      
      
      justifyContent:'center',
      
     
},
  inputs:{
    
    marginTop:80,
    marginBottom:120,
    width:'86%',
    padding:10

    
},
register:{
  width:'95%',
  paddingLeft:10
}
})
export default LoginScreen