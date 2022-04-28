import { View, Text,StyleSheet, TouchableWithoutFeedback,Modal, Button } from 'react-native'
import {React,useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useGetUser, useLogout } from '../config/Database';
import LoginScreen from '../screens/LoginScreen';



const TopHeader = ({navigation}) => {
     const [login, setLogin] = useState(null)
     // const [track, setTrack] = useState(0)
     const [isVisible,setIsvisible]=useState(false)
     const [logoutMessage,setLogoutMessage]=useState("")
     useEffect(async() => {
        const user=await useGetUser();
        setLogin(user)
     }, [login])
     const hideLoginPage=()=>{
        setIsvisible(false)
     }
  return (
<View style={styles.Header}>
    <View style={styles.HeaderSections}>
     
            {
                
            login!==null? <TouchableWithoutFeedback onPress={()=>setIsvisible(true)} style={styles.profile}>
                                <Text style={styles.username} >{login.firstName+" "+login.lastName}</Text>
                                </TouchableWithoutFeedback>
                                :(<View style={styles.HeaderSection2}>
                                                        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Login")} style={styles.login}>
                                                            <Text style={{fontWeight:'bold',textAlign:'center',color:'green'}}>Login</Text>
                                                        </TouchableWithoutFeedback>
                                                        </View>)
                                                    
            }
        <Modal style={styles.logout} visible={isVisible}>
                {

login!==null?<View><Text style={{marginTop:12}}>Log out</Text>
<Button title="Log out" onPress={()=>{useLogout();setLogoutMessage("You loged out succefully")}}/>
<Text style={styles.LogoutMessage}> {logoutMessage}</Text>
<Button title="Close" onPress={()=> setIsvisible(false)}/></View>:<LoginScreen navigation={navigation}/>
                }
               
        </Modal>
    </View>
</View>
    
  )
}
const styles = StyleSheet.create({
    Header:{
       
       
    },
   login:{
        color:'green',
        
   },
    HeaderSection1:{
       
    },
    HeaderSection2:{
        
    },
    HeaderSections:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:12,
       margin:5,
        alignItems:'flex-start',
      

    },
    profile:{
        
    },
    username:{
        color:'green',
        textTransform:'uppercase'
    },
    logout:{
        
    }

})
export default TopHeader