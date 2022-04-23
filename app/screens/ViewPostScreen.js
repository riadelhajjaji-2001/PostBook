import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect ,useState} from 'react'
import useGetPosts from '../hooks/useGetPosts'
const postd={
  "id": "60d21bd367d0d8992e610e25",
  "image": "https://img.dummyapi.io/photo-1556877986-d40833ec88b4.jpg",
  "likes": 6,
  "link": "https://www.behance.net/claudia_udrea",
  "tags": [
      "dog",
      "canine",
      "animal"
  ],
  "text": "Being a proud owner of a frenchie... That means lovely walks and true bonding.. I just love to capture the beauty of nature and my perfect \"batdog\" <3  shallow focus photo of short-coated black dog",
  "publishDate": "2020-05-19T02:16:25.689Z",
  "owner": {
      "id": "60d0fe4f5311236168a109d4",
      "title": "mr",
      "firstName": "Valentin",
      "lastName": "Ortega",
      "picture": "https://randomuser.me/api/portraits/med/men/3.jpg"
  }
}
const ViewPostScreen = ({ route,navigation }) => {
  const {post_id:id}=route.params
  console.log(id)
  const url=`https://dummyapi.io/data/v1/post/${id}`
  const [post,setPost]=useState(null)
  const [isLoading,setIsLoading]=useState(false)
  useEffect(async()=>{
    setIsLoading(true)
    const fetchedPosts= await useGetPosts(url);
    console.log(fetchedPosts)
    setIsLoading(false)
     setPost(fetchedPosts)
     
     //return ()=>setPost(null)
},[])




  return (
    //check if post is null because loading post may take some extra time then error occur
   (isLoading||post==null)?<Text>is Loading...</Text>:(
   <View>
      <View style={styles.userInfo}>
        <Image source={{ uri: post.owner.picture }} style={styles.userImage} />
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
    height: 130,
    width: 100,
    
  },
  postText: {

    marginBottom: 14,
  
    maxWidth: '90%',
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
    borderWidth: 2

  },
  TextAndTags: {
    
    width: '50%',
    marginLeft: 21


  }
})
export default ViewPostScreen
