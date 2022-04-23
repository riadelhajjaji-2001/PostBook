import { View,Modal ,Text,StyleSheet, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import {React,useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useGetUser, useLogout } from '../config/Database';



const NavigationHeader = () => {
     const [login, setLogin] = useState(null)
     const [isVisible,setIsvisible]=useState(false)
     useEffect(async() => {
        const user=await useGetUser();
        setLogin(user)
     }, [])
    
  return (
<SafeAreaView style={styles.Header}>
                <View style={styles.head}>
                        <Text style={styles.logo}>PostBook</Text>
                        {/* <View style={styles.iconContainer}>
                            <Icon style={styles.icon} size={20} name="menu" />
                        </View> */}
                </View>
                <View style={styles.HeaderSections}>
                        {login!==null? <TouchableWithoutFeedback onPress={()=>setIsvisible(true)} style={styles.profile}><Text style={styles.username} >{login.firstName+" "+login.lastName}</Text></TouchableWithoutFeedback>:( <View style={styles.HeaderSection2}>
                            <TouchableWithoutFeedback onPress={()=>navigation.navigate("Login")} style={styles.login}><Text style={{textAlign:'center'}}>Login</Text></TouchableWithoutFeedback>
                </View>)}
                </View>
                <Modal style={styles.logout} visible={isVisible}>


            <Text>Log out</Text>
            <Icon style={styles.icon} size={20} name="menu" onPress={async()=>await useLogout()}/>
            </Modal>
</SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
    Header:{
        justifyContent:'space-between',
       
        alignItems:'center',
        flexDirection:'row',
        
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
        flex:1,
        backgroundColor:'#eee'
    },
    HeaderSection2:{
      //  backgroundColor:'red',
       // zIndex:4
       color:'green'
    },
    HeaderSections:{
        // flexDirection:'row',
        // justifyContent:'space-evenly',

        // alignItems:'center',
        marginBottom:12,
        padding:15
        // marginBottom:16,
        //marginTop:1,
        // flex:1,
       


    },
    head:{
        color:'blue',
        padding:15,
        marginRight:150,
       

    },
    logo:{
        position:'relative',
        top:-5,
        color:'blue',
        fontSize:20

    },
    profile:{
            backgroundColor:'red',
            justifyContent:'space-between',
       
            alignItems:'center',
            flexDirection:'row',
    },login:{
        backgroundColor:'red',
       justifyContent:'space-between',
       
        alignItems:'center',
        flexDirection:'row',
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