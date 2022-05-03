import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useEffect ,useState} from 'react'
import useGetPosts from '../hooks/useGetPosts'
import useGetPostToView from '../hooks/useGetPostToView'
import useGetComments from '../hooks/useGetComments'

const ViewPostScreen = ({ route,navigation }) => {
  const {id}=route.params
  const [comments, setComments] = useState(null)
  const [post,setPost]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  useEffect(async()=>{
  
    setIsLoading(true)
    const fetchedPosts= await useGetPostToView(id);
    setIsLoading(false)
    setPost(await fetchedPosts)
    //comments
    setComments(await useGetComments( post.id,0,5));
    console.log(comments)
    
},[])

const itemRender=({item:comment})=><View style={{backgroundColor:'red',padding:12}}><Text>{comment.message}ee</Text></View>


  return (
    //check if post is null because loading post may take some extra time then error occur
   (isLoading||post===null)?<Text>is Loading...</Text>:(
   <View>
      <View style={styles.userInfo}>
       <Image source={{ uri:post.owner.picture}} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{post.owner.title}. {post.owner.firstName} {post.owner.lastName}</Text>
          <Text style={styles.postDate}>{post.publishDate}</Text>
        </View>
      </View>
      <Image source={{ uri: post.image }} style={styles.PostImage} />
      <View style={styles.TextAndTags}>
        <Text style={styles.postText}>{post.text}</Text>
        <View style={styles.postTags}>
          <Text style={styles.postTag}>{post.tags[0]}</Text>
          <Text style={styles.postTag}>{post.tags[1]}</Text>
          <Text style={styles.postTag}>{post.tags[2]}</Text>
        </View>
      </View>
      <View style={styles.commentsSection}>
            {comments!=null?<FlatList
                  data={comments}
                  renderItem={itemRender}
                  keyExtractor={(item)=>item.id}
              
              
              
              />:null
              } 
      </View>



    </View>)
  )
}
const styles = StyleSheet.create({
  postContainer: {

    padding: 12,
    margin: 2,
    borderStyle: 'solid',
    borderColor: '#00f',
    borderWidth: 3

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
    marginBottom: 5


  },
  postDate: {
    width: '100%',
    marginLeft: 9
  },
  userImage: {
    borderRadius: 30,
    width: 55,
    height: 55,
    
  },
  PostImage: {
    alignSelf:'center',
    width: '80%',
    height: 250,
    
  },
  postText: {

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
    padding:121
  }
})
export default ViewPostScreen
