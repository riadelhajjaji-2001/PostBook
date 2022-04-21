import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
const NavigationHeader = ({title,navigation}) => {
  return (
      <View style={styles.Header}>
          <Text style={styles.HeaderText}>{title}</Text>
      <Icon style={styles.icon} size={23} name="menu" onPress={()=>navigation.openDrawer()}/>
      </View>
    
  )
}
const styles = StyleSheet.create({
    Header:{
            height:'100%',
            width:'100%',
            flexDirection:'row',
            alignItems:"center",
            justifyContent:'center'
    },
    HeaderText:{
        fontWeight:'bold',
        fontStyle:20,
        color:'#333',
        letterSpacing:1

    },
    icon:{
        
        position:'absolute',
        top:-5,
        left:16
    }
})
export default NavigationHeader