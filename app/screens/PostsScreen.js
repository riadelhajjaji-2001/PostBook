import React, { useEffect, useState } from 'react'
import {  Text, View,TextInput,StyleSheet,ScrollView} from 'react-native'
import Post from '../components/Post'
import useGetPosts from '../hooks/useGetPosts'
import Icon from 'react-native-vector-icons/MaterialIcons';

function PostsScreen({navigation}) {
    const url="https://dummyapi.io/data/v1/post?page=1&limit=10"
    const [posts,setPosts]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [query,setQuery]=useState("")
    const [addPostWindow,setAddPostWindow]=useState(false)
    const searchByTag=async(tag)=>{
      setIsLoading(true)
      const fetchedPosts= await useGetPosts(`https://dummyapi.io/data/v1/tag/${tag}/post`);
      if (fetchedPosts!==[]) { setPosts(fetchedPosts.data);
      setIsLoading(false)}
    }
   
    useEffect(async()=>{
        setIsLoading(true)
        const fetchedPosts= await useGetPosts(url);
        setPosts(fetchedPosts.data);
        setIsLoading(false)
       // setTimeout(()=> console.log(fetchedPosts.data),1000)
      
        //erroe handling for fetching posts
    },[])
//check if we can pass an entir object as param to the navigation
    const viewPost=(post_id)=>{
      navigation.navigate("ViewPost",{post_id:post_id})
  }
    const renderItem = ({ post }) =><Post post={post}/>
  return (

    <View style={styles.container}>
      <View style={styles.toolsBar}>
          <View style={styles.search}>
                <TextInput placeholder='Search posts' onChangeText={async(tag)=>{
                  if(tag==""){
                    setIsLoading(true)
                    const fetchedPosts= await useGetPosts(url);
                    setPosts(fetchedPosts.data);
                    setIsLoading(false)
                }else{
                  searchByTag(tag)
                  setQuery(tag)
                }
                  }}/> 
                {/* il reste le cas ou input est vide */}
          </View>
          <View style={styles.addPost}>
              <Icon size={23} name="post-add" onPress={()=>navigation.navigate("CreatePost")} /> 
              {/* <Modal visible={addPostWindow}>
                <Icon name="close" size={20} onPress={()=>setAddPostWindow(false)}></Icon>

              </Modal> */}
          </View>
          
      </View>

     
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                {!isLoading?
                posts.map((post)=><Post tagQ={query} OnPress={()=>viewPost(post.id)} post={post} key={post.id}/>):<Text style={styles.isLoading}>Loading...</Text>
                }
            </ScrollView>
        </View>
    </View>
  )
}

export default PostsScreen
const styles = StyleSheet.create({
            container:{
              flex:1,
              padding:5
            },
            toolsBar:{
             padding:6,
              backgroundColor:'#eee',
             // margin:20,
              alignItems:'center',
              flexDirection:'row',
            
              alignContent:'space-between'

            },
            addPost:{
              width:'20%',

            },
            search:{
              width:'70%'

            },
            isLoading:{
              flex:1,
              backgroundColor:"#eee"
            }
})