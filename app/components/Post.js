import { View, Text, Image,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'



const Post = ({post,tagQ,navigation}) => {
    const deletePost=async(posIid)=>{
        const myHeaders=new Headers();
        myHeaders.append("app-id","625c402dc48cf93352d6e34b")
        const url=`https://dummyapi.io/data/v1/post/${posIid}`;
        await fetch(url,{headers:myHeaders, method:"DELETE"}).then(res=>setIsDeleted(true))
        setTimeout(()=>setDisapear(true),2000)
    }
    const viewPost=(mypost)=>{
        navigation.navigate("ViewPost",mypost)
    }
    const [isDeleted,setIsDeleted]=useState(false)
    const [disapear,setDisapear]=useState(false)
  return (
    !isDeleted? <TouchableOpacity style={styles.postContainer} onPress={()=>viewPost(post)} onLongPress={()=>deletePost(post.id)} >
        <View style={styles.userInfo}>
            <Image source={{uri:post.owner.picture}}  style={styles.userImage}/>
            <View>
            <Text style={styles.userName}>{post.owner.title}. {post.owner.firstName} {post.owner.lastName}</Text>
            <Text style={styles.postDate}>{post.publishDate}</Text>
            </View>
        </View>
      
          <Image source={{uri:post.image}}  style={styles.PostImage}/>
          <View style={styles.TextAndTags}>
            <Text style={styles.postText}>{post.text}</Text>
            <View style={styles.postTags}>
                    <Text style={[styles.postTag,(tagQ==post.tags[0])?{backgroundColor:'red'}:null]}>{post.tags[0]}</Text>
                    <Text style={[styles.postTag,(tagQ==post.tags[1])?{backgroundColor:'red'}:null]}>{post.tags[1]}</Text>
                    <Text style={[styles.postTag,(tagQ==post.tags[2])?{backgroundColor:'red'}:null]}>{post.tags[2]}</Text>
            </View>
          </View>
      
    </TouchableOpacity>:disapear?null:<View style={styles.postContainer}><Text>The post was deleted</Text></View>
  )
}
const styles = StyleSheet.create({
    postContainer:{
           
            padding:12,
            margin:2,
            borderStyle:'solid',
            borderColor:'#00f',
            borderWidth:3

    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        paddingBottom:3,
        
    },
    userName:{
        marginLeft:9,
        marginBottom:5
       
        
    },
    postDate:{
        width:'100%',
        marginLeft:9
    },
    userImage:{
        borderRadius:30,
        width:55,
        height:55,
        float:'left'
    },
    PostImage:{
            height:130,
            width:100,
            float:'left',
            
    },
    postText:{

        marginBottom:14,
        wordWrap:'wrap',
        maxWidth:'90%',
        paddingTop:6
    },
    postTags:{
       flexWrap:'wrap',
        flexDirection:'row',
        gap:2
    },
    postTag:{
        backgroundColor:'yellow',
        padding:5,
        borderRadius:5,
        borderStyle:'solid',
        borderColor:'#000',
        borderWidth:2
        
    },
    TextAndTags:{
        float:'left',
        width:'50%',
        marginLeft:21

        
    }
})
export default Post