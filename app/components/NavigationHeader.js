import { View, Text,StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavigationHeader = ({title,navigation}) => {
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
                <Text style={styles.HeaderText}>Home</Text>
        </View>
        <View style={styles.HeaderSection2}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate("Login")} style={styles.HeaderText}><Text>Login</Text></TouchableWithoutFeedback>
        </View>
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
        flex:1


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

    }

})
export default NavigationHeader