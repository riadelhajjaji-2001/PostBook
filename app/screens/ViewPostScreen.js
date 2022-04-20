import { View, Text,StyleSheet,Image} from 'react-native'
import React, { useEffect } from 'react'
//  const post={
//       id: "60d21b4667d0d8992e610c85",
//       image: "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
//       likes: 43,
//       tags: [
//           "animal",
//           "dog",
//           "golden retriever"
//       ],
//       text: "adult Labrador retriever",
//       publishDate: "2020-05-24T14:53:17.598Z",
//       owner: {
//           id: "60d0fe4f5311236168a109ca",
//           title: "ms",
//           firstName: "Sara",
//           lastName: "Andersen",
//           picture: "https://randomuser.me/api/portraits/women/58.jpg"
//       }
//     };

const ViewPostScreen = ({navigation}) =>{
 
  useEffect(()=>{
    const {post}={...navigation.getParam("mypost")}
  }
            
            ,[]
  )
  return (
    <View>
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
                      <Text style={styles.postTag}>{post.tags[0]}</Text>
                      <Text style={styles.postTag}>{post.tags[1]}</Text>
                      <Text style={styles.postTag}>{post.tags[2]}</Text>
              </View>
            </View>
  
    </View>
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
export default ViewPostScreen
