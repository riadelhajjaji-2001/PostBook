



///This screen is never used ,it will be used for some purpose in futur


import { View, Text, Button,StyleSheet } from 'react-native'
import {React,useEffect} from 'react'

const AboutScreen = ({route,navigation}) => {
 
  
  useEffect(() => {
    
    
   // if(skip===true){
      navigation.navigate('Home')
    
  }, [route])
  
  return (
    <View style={styles.container}>
      <Button title="Go to Home" onPress={()=>navigation.navigate("Home")}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:40
  }
})


export default AboutScreen