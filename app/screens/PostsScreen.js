import React, { useEffect, useState } from 'react'
import {  Text, View,TextInput,StyleSheet,ScrollView, TouchableOpacity, FlatList, SafeAreaView, Button} from 'react-native'
import Post from '../components/Post'
import useGetPosts from '../hooks/useGetPosts'
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopHeader from '../components/TopHeader';
 const url="https://dummyapi.io/data/v1/post?page=1&limit=10"
function PostsScreen({navigation}) {
  //  state
    const [posts,setPosts]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [query,setQuery]=useState("")
    const [track,setTrack]=useState(0)
  //state
    const searchByTag=async(tag)=>{
        setIsLoading(true)
        const fetchedPosts= await useGetPosts(`https://dummyapi.io/data/v1/tag/${tag}/post`);
        if (fetchedPosts!==[]) {setPosts(fetchedPosts.data);
        setIsLoading(false)}
    }
  //  
    useEffect(async()=>{
        setIsLoading(true)
        const fetchedPosts=await useGetPosts(url);
        setPosts(await fetchedPosts.data)
       
        setIsLoading(false)
      
    },[])
//check if we can pass an entir object as param to the navigation
    const viewPost=(post_id)=>{
      navigation.navigate("ViewPost",{id:post_id})
  }
  const keepTrack=()=>setTrack(track+1)
  const handleSearchByTag=async(tag)=>{
              if(tag==""){
                setIsLoading(true)
                const fetchedPosts=await useGetPosts(url);
                setPosts(fetchedPosts.data);
                setIsLoading(false)
            }else{
               await searchByTag(tag)
              setQuery(tag)
            }
              }
  const renderlist=({e})=><View><Text>{e.name}</Text></View>
  const renderItem=(post)=><Post tagQ={query} OnPress={()=>viewPost(post.id)} post={post} key={post.id}/>
  //reeeeeeeeeendreing
  return (

    <SafeAreaView style={styles.container}>
      <TopHeader navigation={navigation}/>

      <View style={styles.toolsBar}>
          <View style={styles.search}>
                 <TextInput style={styles.searchText} placeholder='Search posts' onChangeText={(text)=>handleSearchByTag(text)}/>  
                {/* il reste le cas ou input est vide */}
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("CreatePost")} style={styles.addPost}>
              <Icon size={28} name="post-add"  /> 
          </TouchableOpacity>
          
      </View>

     
        <View style={styles.Postcontainer}>

            <ScrollView style={styles.container}>
                {!isLoading?
                posts.map((post)=><Post tagQ={query} OnPress={()=>viewPost(post.id)} post={post} key={post.id}/>):<View style={styles.isLoading}><Text style={styles.isLoadingText} >Loading...</Text></View>
                }
            </ScrollView>

{/* 
              <SafeAreaView style={styles.FlatListContainer}>

              <FlatList
                    // data={posts}
                    // renderItem={renderItem}
                    // keyExtractor={(post)=>post.id}
                
                  data={[{name:1},{name:2},{name:3},{name:4},{name:5}]}
                  renderItem={renderlist}
                     keyExtractor={(post)=>post.name}
                     ItemSeparatorComponent={()=><Text>llllllll</Text>}
                
                />
              </SafeAreaView> */}










        </View>
    </SafeAreaView>
  )
}

export default PostsScreen
const styles = StyleSheet.create({
            container:{
              flex:1,
              backgroundColor:"#fff",
              padding:2
            },
            toolsBar:{
              alignItems:'center',
              flexDirection:'row',
              justifyContent:'space-around'

            },
            addPost:{
            
            // backgroundColor:'blue',
              padding:7,
            

            },
            search:{
                borderColor:'#000',
                margin:3,
                borderWidth:1,
                width:230,
                borderTopColor:'blue',
                borderRightColor:'blue'

            },
            searchText:{
               padding:5,
               marginRight:23
              // fontSize:18,
             
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
            Postcontainer:{
            
               flex:1,
              padding:10,
              paddingTop:0


            },
            FlatListContainer:{
              backgroundColor:'red',
              flex:1
            }
})