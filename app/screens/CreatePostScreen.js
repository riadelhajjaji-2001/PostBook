import { View, Text ,TextInput,StyleSheet, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
const CreatePostScreen = () => {
    const [text,setText]=useState("")
    const [image,setImage]=useState("")
    const [link,setLink]=useState("")
    const [tags,setTags]=useState([])
    const [owner,setOwner]=useState("")
    const [post,setPost]=useState({})

    useEffect(()=>{
        setPost({
        image: image,
        link: "https://www.behance.net/claudia_udrea",//optional
        tags: [
           ...tags
        ],
        text:text,
       
        owner: owner
        })

    },[text,tags,link,owner,image])
    const url="https://dummyapi.io/data/v1/post/create"
    const sendPost=async (mypost) => {
        //     const mypost={
        //               image: "https://img.dummyapi.io/photo-1556877986-d40833ec88b4.jpg",
        // link: "https://www.behance.net/claudia_udrea",
        // tags: [
        //     "naruto",
        //     "riad",
        //     "inpt"
        // ],
        // text: "Hi I am riad elhajjaji from cloud inpt",
       
        // owner: "60d0fe4f5311236168a109d4"
        //      }
            const myHeaders=new Headers();
            myHeaders.append("app-id","625c402dc48cf93352d6e34b");
            myHeaders.append("Accept","application/json")
            myHeaders.append("Content-Type","application/json")
            const  myInit={
                method:'POST',
                headers:myHeaders,
                body:JSON.stringify(mypost),
               // mode:'no-cors'
            
            }
            console.log(myInit)
            
            const res=await fetch(url,myInit);
            if(!res){
                console.log(res)
            }
            console.log(res)
            const data=await res.json();
            console.log(data)
    }
    
  return (
    // {
  
    //     "image": "https://img.dummyapi.io/photo-1556877986-d40833ec88b4.jpg",
    //     "link": "https://www.behance.net/claudia_udrea",
    //     "tags": [
    //         "dog",
    //         "canine",
    //         "animal"
    //     ],
    //     "text": "Hi I am riad elhajjaji from cloud inpt",
       
    //     "owner": "60d0fe4f5311236168a109d4"
        
    // }
   
    
    <View style={styles.container}>
        <Text>
  
  "image": "https://img.dummyapi.io/photo-1556877986-d40833ec88b4.jpg",
  "link": "https://www.behance.net/claudia_udrea",
  "tags": [
      "dog",
      "canine",
      "animal"
  ],
  "text": "Hi I am riad elhajjaji from cloud inpt",
 
  "owner": "60d0fe4f5311236168a109d4"
  
</Text>
        <Text>Write Something</Text>
       <TextInput style={styles.input} placeholder='write text' onChangeText={(text)=>{setText(text)}}/> 
       <TextInput style={styles.input} placeholder='add an image' onChangeText={(image)=>{setImage(image)}}/> 
       <TextInput style={styles.input} placeholder='add tags posts' onChangeText={(tags)=>{setTags(tags.split(" ").filter(tag=>tag!=''))}}/> 
       <TextInput style={styles.input} placeholder='your id' onChangeText={(id)=>{setOwner(id)}}/> 
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