import { View, Text, Image,StyleSheet, TouchableOpacity, Modal, Button} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Post = ({post,tagQ,OnPress}) => {
    
    const deletePost=async(posIid)=>{
        console.log("deleting post")
        const myHeaders=new Headers();
        myHeaders.append("app-id","625c402dc48cf93352d6e34b")
        const url=`https://dummyapi.io/data/v1/post/${posIid}`;
        await fetch(url,{headers:myHeaders, method:"DELETE"}).then(res=>setIsDeleted(true))
        setTimeout(()=>setDisapear(true),2000)
        console.log("post deleted")
    }
    const [isDeleted,setIsDeleted]=useState(false)
    const [disapear,setDisapear]=useState(false)
    const [deleteIsVisible, setDeleteIsVisible] = useState(false)
    const [like, setLike] = useState(true)
  return (
    (!isDeleted)? <TouchableOpacity style={styles.postContainer} onPress={OnPress}  onLongPress={()=>setDeleteIsVisible(true)} >
        <View style={styles.userInfo}>
            {post.owner.picture?<Image source={{uri:post.owner.picture}}  style={styles.userImage}/>:<Image source={require("../shared/avatar.png")} style={styles.userImage}/>
            }
            <View>
            <Text style={styles.userName}>{post.owner.title}. {post.owner.firstName} {post.owner.lastName}</Text>
            <Text style={styles.postDate}>{post.publishDate}</Text>

            </View>
        </View>
      <View style={styles.ImageAndTags}>
          {post.image?<Image source={{uri:post.image}}  style={styles.PostImage}/>:<Image source={require("../shared/cloud.jpg")} style={styles.PostImage}/>
            }
          <View style={styles.TextAndTags}>
            <Text style={styles.postText}>{post.text}</Text>
            <View style={styles.postTags}>
                    <Text style={[styles.postTag,(tagQ==post.tags[0])?{backgroundColor:'red'}:null]}>{post.tags[0]}</Text>
                    <Text style={[styles.postTag,(tagQ==post.tags[1])?{backgroundColor:'red'}:null]}>{post.tags[1]}</Text>
                    <Text style={[styles.postTag,(tagQ==post.tags[2])?{backgroundColor:'red'}:null]}>{post.tags[2]}</Text>
            </View>
           
          </View>
          </View>
          {/* deleting pop up*/}
          
                        <Modal animationType="slide" visible={deleteIsVisible} transparent={true}>
                            <View style={styles.deletePopUp}>
                                        <Text style={styles.deletePopUpText}>Do you want to delete the post ?</Text>
                                        <View style={styles.deletePopUpButton}>
                                           <View><Button color="#bbb"  title='Cancel' onPress={()=>setDeleteIsVisible(false)}/></View>
                                            <View><Button title='delete' onPress={()=>deletePost(post.id)}/></View>

                                        </View>
                            </View>
                        </Modal>
                        <TouchableOpacity onPress={()=>setLike(!like)} style={styles.like}>
                       
                    <Icon color={'blue'} name={like?"like2":"like1"} size={23}/>
                    <Text>{post.likes+(like?0:1)}</Text>
                </TouchableOpacity>
      
    </TouchableOpacity>:disapear?null:<View style={styles.postContainer}><Text>The post was deleted</Text></View>
  )
}
const styles = StyleSheet.create({
    postContainer:{
            justifyContent:'center',
            padding:18,
            margin:12,
            marginBottom:-14,
            borderStyle:'solid',
            borderColor:'rgba(0,0,255,0.6)',
            borderWidth:2,
            borderTopColor:'#fff',
            borderBottomWidth:5,
            height:370,
          

    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30,
        borderBottomWidth:1,
        borderBottomColor:'#bbb',
        paddingBottom:23,
        
    },
    userName:{
        marginLeft:9,
        marginBottom:5,
       
       
        
    },
    postDate:{
        width:'100%',
        marginLeft:9,
        alignSelf:'flex-end',
        fontSize:12,
        color:'rgba(0,0,0,0.7)'

    },
    userImage:{
        borderRadius:30,
        width:55,
        height:55,
      
    },
    ImageAndTags:{
        flex:4,
        flexDirection:'row'

    },
    PostImage:{
        flex:2,
        height:190,
        width:190,
            
            
    },
    postText:{

        marginBottom:14,
      
        maxWidth:'90%',
        paddingTop:6
    },
    postTags:{
        flexWrap:'wrap',
        flexDirection:'row',
        margin:3
        
    },
    postTag:{
        backgroundColor:'yellow',
        padding:5,
        borderRadius:5,
        borderStyle:'solid',
        borderColor:'#000',
        borderWidth:2,
        margin:3
        
    },
    TextAndTags:{
       
        width:'50%',
        marginLeft:21

        
    },
    deletePopUp:{
        flex:1,
        height:200,
        position:'absolute',
        alignSelf:'center',
        marginTop:'80%',
        width:320,
        backgroundColor:'rgba(0,0,0,0.7)',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:20
        
        
    },
    deletePopUpText:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
    deletePopUpButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'space-between'
    },
    like:{
            alignSelf:'flex-end',
            flex:1,
           position:'absolute',
            padding:20,
            bottom:0,
            marginTop:12
    }
  
})
export default Post