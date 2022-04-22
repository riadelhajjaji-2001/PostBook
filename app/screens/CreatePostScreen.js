import { View, Text ,TextInput,StyleSheet, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetUser } from '../config/Database'
const CreatePostScreen = () => {
    const [text,setText]=useState("")
    const [image,setImage]=useState("")
    const [link,setLink]=useState("")
    const [tags,setTags]=useState([])
    const [owner,setOwner]=useState('')
    const [post,setPost]=useState({})

    useEffect(async()=>{
        await useGetUser().then((u)=>setOwner(u.id)).then(
                    setPost({
                            image: image,
                            link: "https://www.behance.net/claudia_udrea",//optional
                            tags: [
                            ...tags
                            ],
                            text:text,
                        
                            owner: owner
                }))
        //  "6261f48d66f8f961bb3a6aa5"
    },[text,tags,link,owner,image])

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
            if(!res){
                console.log(res)
            }
            
            const data=await res.json();
            
    }
  return (
    <View style={styles.container}>
        <Text>Write Something</Text>
        <TextInput style={styles.input} placeholder='write text' onChangeText={(text)=>{setText(text)}}/> 
        <TextInput style={styles.input} placeholder='add an image' onChangeText={(image)=>{setImage(image)}}/> 
        <TextInput style={styles.input} placeholder='add tags posts' onChangeText={(tags)=>{setTags(tags.split(" ").filter(tag=>tag!=''))}}/> 
        {/* <TextInput style={styles.input} placeholder='your id' onChangeText={(id)=>{setOwner(id)}}/>  */}
        <Button title='Post' onPress={()=>sendPost(post)}/>
    </View>)
     
    
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },

    input:{
        padding:12
    }
})
export default CreatePostScreen