import { View, Text,StyleSheet, TouchableWithoutFeedback,Modal,Image, Button } from 'react-native'
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
         setLogin(await user)
        return ()=>setLogin({})
        
     }, [login])
     const hideLoginPage=()=>{
        setIsvisible(false)
     }
  return (
<View style={styles.Header}>
    <View style={styles.HeaderSections}>
     
     
            {
                
            login!==null? <TouchableWithoutFeedback onPress={()=>setIsvisible(true)} style={styles.profile}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={styles.username} >{login.firstName+" "+login.lastName}</Text>
                                <Image style={styles.avatar} source={require("../shared/avatar.png")}/>
                            </View>
                                </TouchableWithoutFeedback>
                                :(<View style={styles.HeaderSection2}>
                                                        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Login")} style={styles.login}>
                                                            <Text style={{fontWeight:'bold',color:'green'}}>Login</Text>
                                                            
                                                        </TouchableWithoutFeedback>
                                                        </View>)
                                                    
            }
        <Modal  visible={isVisible}>
            <View style={styles.logout}>
                {

login!==null?<View>
        <Button title="Log out" onPress={async()=>{await useLogout();navigation.navigate("About",{skip:true})}}/>
        <Text style={styles.LogoutMessage}> {logoutMessage}</Text>
       <View><Button color='#bbb'  title="Close" onPress={()=>setIsvisible(false)}/></View>
</View>
        :<View style={{flex:1,backgroundColor:'red'}}><LoginScreen navigation={navigation}/></View>
                }
               </View>
        </Modal>
    </View>
</View>
    
  )
}
const styles = StyleSheet.create({
    Header:{
       
       
    },
    avatar:{
            width:30,
            height:30,
            borderRadius:100
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
        marginRight:16,
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
        marginTop:200,
        margin:100
        
    }

})
export default TopHeader