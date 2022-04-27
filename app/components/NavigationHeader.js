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
    <View style={styles.head}>
            <Text style={styles.logo}>PostBook</Text>
    </View>
    <View style={styles.HeaderSections}>
        {/* <View style={styles.HeaderSection1}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate("Home")} style={styles.HeaderText}><Text style={{fontWeight:'bold',textAlign:'left'}}>Home</Text></TouchableWithoutFeedback>
        </View>     */}
            {
                
            login!==null? <TouchableWithoutFeedback onPress={()=>setIsvisible(true)} style={styles.profile}>
                                <Text style={styles.username} >{login.firstName+" "+login.lastName}</Text>
                                </TouchableWithoutFeedback>:(<View style={styles.HeaderSection2}>
                                                        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Login")} style={styles.HeaderText}>
                                                            <Text style={{fontWeight:'bold',textAlign:'center'}}>Login</Text>
                                                        </TouchableWithoutFeedback>
                                                        </View>)
                                                    
            }
        <Modal style={styles.logout} visible={isVisible}>


                <Text style={{marginTop:12}}>Log out</Text>
                <Button title="Log out" onPress={()=>{useLogout();setLogoutMessage("You loged out succefully")}}/>
                     <Text style={styles.LogoutMessage}> {logoutMessage}</Text>
                   <Button title="Close" onPress={()=> setIsvisible(false)}/>
        </Modal>
    </View>
</View>
    
  )
}
const styles = StyleSheet.create({
    Header:{
        padding:10,
        flex:1
    },
   
    icon:{
        color:'blue',
        position:'absolute',
        top:-5,
        left:16,
        marginBottom:10
    },
    iconContainer:{
       
        marginBottom:7
    },
    HeaderSection1:{
        flex:1
    },
    HeaderSection2:{
        flex:1
    },
    HeaderSections:{
        flexDirection:'row',
        justifyContent:'space-between',
    
        alignItems:'center',
        padding:10,
        flex:1,
        


    },
    head:{
        flexDirection:'row',
        justifyContent:'space-between',
        fontWeight:'bold',
        fontSize:15,
        alignItems:'center',
        color:'blue',
        padding:15,
        marginRight:23,
        alignItems:'center',
        flex:1


    },
    logo:{
        position:'relative',
        top:6,
        left:-27,
        fontWeight:'bold',
        color:'blue',
        fontSize:20

    },
    profile:{

    },
    username:{
        color:'green',
        textTransform:'uppercase'
    },
    logout:{
        flex:1
    }

})
export default NavigationHeader