import { View, Text,StyleSheet, TouchableWithoutFeedback,Modal, Button } from 'react-native'
import {React,useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useGetUser, useLogout } from '../config/Database';



const NavigationHeader = ({title,navigation}) => {
     const [login, setLogin] = useState(null)
     const [isVisible,setIsvisible]=useState(false)
     const [logoutMessage,setLogoutMessage]=useState("")
     useEffect(async() => {
        const user=await useGetUser();
        setLogin(user)
     }, [])
    
  return (
<View style={styles.Header}>
    <TouchableWithoutFeedback onPress={()=>navigation.navigate("Home")} style={styles.head}>

            <Text style={styles.logo}>PostBook</Text>
    </TouchableWithoutFeedback>
</View>
    
  )
}
const styles = StyleSheet.create({
    Header:{
        marginTop:12,
        flex:1
    },
    head:{
       
        justifyContent:'space-between',
        fontWeight:'bold',
        fontSize:15,
        alignItems:'center',
        color:'blue',
      


    },
    logo:{
       
        fontWeight:'bold',
        color:'blue',
        fontSize:20

    },
})
export default NavigationHeader