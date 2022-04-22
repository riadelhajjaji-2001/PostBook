import { View, Text,StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {React,useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useGetUser, useLogout } from '../config/Database';
import { Modal } from 'react-native-web';


const NavigationHeader = ({title,navigation}) => {
     const [login, setLogin] = useState(null)
     const [isVisible,setIsvisible]=useState(false)
     useEffect(async() => {
        const user=await useGetUser();
        setLogin(user)
     }, [])
    
  return (
<View style={styles.Header}>
    <View style={styles.head}>
            <Text style={styles.logo}>PostBook</Text>
            <View style={styles.iconContainer}>
                <Icon style={styles.icon} size={20} name="menu" onPress={()=>navigation.openDrawer()}/>
            </View>
    </View>
    <View style={styles.HeaderSections}>
        <View style={styles.HeaderSection1}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Posts")} style={styles.HeaderText}><Text style={{fontWeight:'bold',textAlign:'left'}}>Home</Text></TouchableWithoutFeedback>
        </View>    
            {
            login!==null? <TouchableWithoutFeedback onPress={()=>setIsvisible(true)} style={styles.profile}><Text style={styles.username} >{login.firstName+" "+login.lastName}</Text></TouchableWithoutFeedback>:( <View style={styles.HeaderSection2}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate("Login")} style={styles.HeaderText}><Text style={{fontWeight:'bold',textAlign:'center'}}>Login</Text></TouchableWithoutFeedback>
        </View>)
            
            }
        <Modal style={styles.logout} visible={isVisible}>


                <Text>Log out</Text>
                <Icon style={styles.icon} size={20} name="menu" onPress={async()=>await useLogout()}/>
        </Modal>
    </View>
</View>
    
  )
}
const styles = StyleSheet.create({
    Header:{
        padding:13,
        flex:1
    },
    // HeaderText:{
    //     fontWeight:'bold',
    //     fontSize:15,
    //     color:'#333',
    //     letterSpacing:1

    // },
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
        justifyContent:'space-evenly',
        borderTopWidth:1,
        borderTopColor:"blue",
        alignItems:'center',
        padding:12,
        marginBottom:12,
        marginTop:-10,
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