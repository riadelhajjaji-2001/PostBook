import { View,Text ,TextInput,StyleSheet, Button, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetUser } from '../config/Database'

const CreatePostScreen = ({navigation}) => {
    const [text,setText]=useState("")
    const [image,setImage]=useState("")
    const [tags,setTags]=useState([])
    const [owner,setOwner]=useState({})
    const [post,setPost]=useState({})

   

    useEffect(async()=>{
        const user=await useGetUser();
        setOwner(await user)
       
              
   },[])

    useEffect(async()=>{
    
         setPost({
                            image: image,
                            link: "https://www.behance.net/claudia_udrea",//optional
                            tags: [
                            ...tags
                            ],
                            text:text,
                            owner:owner?owner.id:""
                })
               
       
    },[text,tags,owner,image])

    const url="https://dummyapi.io/data/v1/post/create"
    const sendPost=async (mypost) => {
            const myHeaders=new Headers();
            myHeaders.append("app-id","625c402dc48cf93352d6e34b");
            myHeaders.append("Accept","application/json")
            myHeaders.append("Content-Type","application/json")
            const  myInit={
                method:'POST',
                headers:myHeaders,
                body:JSON.stringify(mypost),
            } 
            const res=await fetch(url,myInit);
            if(!res.ok){
                console.log("posting request failed")
                console.log(res)
            }
            

            
    }
  return owner?(
    <View style={styles.container}>
        <View style={styles.owner}>
            <Image style={styles.photo} source={require("../shared/avatar.png")}/>
            <Text style={styles.username}>{owner.firstName+" "+owner.lastName}</Text>
        </View>
        <View style={styles.inputs}>
            <TextInput style={[styles.input,styles.postText]} placeholder='write text' onChangeText={(text)=>setText(text)}/> 
            <TextInput style={styles.input} placeholder='add an image' onChangeText={(image)=>setImage(image)}/> 
            <TextInput style={[styles.input,styles.lastInput]} placeholder='tag1 tag2 tag3' onChangeText={(tags)=>setTags(tags.split(" ").filter(tag=>tag!=''))}/>
            <Button style={styles.post} title="Post"  onPress={async()=>{
                await sendPost(post)
                navigation.navigate("About",{skip:true})
                }}/>
       </View>
       
    </View>):<View style={styles.fallback}><Text style={styles.fallbackText}>You must Log in</Text>
                 <Button title="Log in" onPress={()=>navigation.navigate("Login")}/>
            </View>
     
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginTop:20
       
    },
    owner:{
          
            alignItems:'center'
           
            
    },
    username:{
            fontWeight:'bold'
    },
    photo:{
            width:80,
            height:80,
            borderRadius:100
    },

    inputs:{
        marginBottom:40,
        shadowColor:'#000',
        shadowRadius:21,
        elevation:3,
        padding:6,
        marginTop:29
        
    },
    input:{
        padding:10,
        margin:8,
        borderWidth:1,
        borderColor:'blue'
    },
    lastInput:{
        marginBottom:20
    },
    post:{
        

    },
    home:{
        color:'blue',
        width:120,
        padding:8,
        fontWeight:'bold',
        fontSize:12,
        backgroundColor:'#bbb'
  },
  user:{

  },
  fallback:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      shadowColor: 'black',
      shadowOpacity: 0.9,
      shadowOffset: { width: 0, height: 3},
      shadowRadius: 10,
      elevation: 2,
      
  },
  fallbackText:{
        padding:17,
        fontWeight:'bold',
        color:'blue',
        marginBottom:12
  },
  postText:{
      height:70,
      paddingTop:0
  }

})
export default CreatePostScreen