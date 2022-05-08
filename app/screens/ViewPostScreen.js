import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect ,useState} from 'react'
import useGetPostToView from '../hooks/useGetPostToView'
import useGetComments from '../hooks/useGetComments'
import Comment from '../components/Comment'

const ViewPostScreen = ({ route,navigation }) => {
  const {id}=route.params
  const [comments, setComments] = useState(null)
  const [post,setPost]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  const [ErrorId, setErrorId] = useState(false)
  useEffect(async()=>{
  
    setIsLoading(true)
    const fetchedPosts=await useGetPostToView(id);
  
    setPost(await fetchedPosts)
    //comments
    setComments(await useGetComments(id,0,5));
    console.log(comments)
    setIsLoading(false)
},[])

  return (
    //check if post is null because loading post may take some extra time then error occur
   (isLoading||post===null)?<View style={styles.isLoading}><Text style={styles.isLoadingText}>Loading...</Text></View>:(
   <ScrollView style={styles.postContainer}>
      <View style={styles.userInfo}>
      {post.owner.picture?<Image source={{uri:post.owner.picture}}  style={styles.userImage}/>:<Image source={require("../shared/avatar.png")} style={styles.userImage}/>
            } 
       
        <View>
          <Text style={styles.userName}>{post.owner.title}. {post.owner.firstName} {post.owner.lastName}</Text>
          <Text style={styles.postDate}>{post.publishDate}</Text>
        </View>
      </View>
      {post.image?<Image source={{uri:post.image}}  style={styles.PostImage}/>:<Image source={require("../shared/cloud.jpg")} style={styles.PostImage}/>
            }
      
      <View style={styles.TextAndTags}>
        <Text style={styles.postText}>{post.text}</Text>
        <View style={styles.postTags}>
          <Text style={styles.postTag}>{post.tags[0]}</Text>
          <Text style={styles.postTag}>{post.tags[1]}</Text>
          <Text style={styles.postTag}>{post.tags[2]}</Text>
        </View>
      </View>
      {/* Here we display comments */}
      <View style={styles.commentsSection}>
            {comments&&comments.length!=0?comments.map((comment)=><Comment comment={comment} key={comment.id}/>):<Text>No comments</Text>
              } 
      </View>

    </ScrollView>)
  )
}
const styles = StyleSheet.create({
  postContainer: {
    padding: 12,
    margin: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 2,
    backgroundColor:'#eee',
    flex:1

  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 3,

  },
  userName: {
    marginLeft: 9,
    marginBottom: 5,
    color:'rgba(0,0,255,0.6)',
    fontWeight:'bold'


  },
  postDate: {
    width: '100%',
    marginLeft: 9,
    color:'rgba(0,0,0,0.6)'
  },
  userImage: {
    borderRadius: 30,
    width: 55,
    height: 50,
    
  },
  PostImage: {
    alignSelf:'center',
    width: '80%',
    height: 250,
    
  },
  postText: {
    fontSize:15,
    marginBottom: 14,
    paddingTop: 6
  },
  postTags: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  
  },
  postTag: {
    backgroundColor: 'yellow',
    padding: 5,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 2,
    marginRight:5

  },
  TextAndTags: {
    alignSelf:'center',
  },
  commentsSection:{
   
    padding:12,
    marginTop:9,
    marginBottom:12
  
 
    
   
    
  },
  isLoading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:120,
    padding:30
    
  },
  isLoadingText:{
    flex:1,
    fontWeight:'bold',
    fontSize:16,
    color:'rgba(0,0,0,0.5)'
  },
})
export default ViewPostScreen
